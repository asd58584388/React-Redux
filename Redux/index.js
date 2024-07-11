//createStore Redux API
function createStore(reducer,enhancer)
{
    //enhancer part (enhancer is optional)
    if(enhancer)
    {
        return enhancer(createStore)(reducer);
    }

    //reducer part
    let state = reducer(undefined, {type:"@@INIT"});
    const listeners = [];
    return {
        getState: () => state,
        dispatch: (action) => {
            state = reducer(state, action);
            listeners.forEach(listener => listener());
        },
        subscribe: (listener) => {
            listeners.push(listener);
        }
    };
}

// applyMiddleware Redux API
// used for create Redux store enhancer
function applyMiddleware(...middlewares) {
    return (createStore) => (reducer) => {
        const store = createStore(reducer);
        const middlewareAPI = {
            getState: store.getState,
            dispatch: (action,...args) => dispatch(action,...args)
        };
        const dispatchChain = middlewares.map(middleware => middleware(middlewareAPI));
        const composedMiddleware = compose(...dispatchChain);
        const dispatch = composedMiddleware(store.dispatch);
        return {
            ...store,
            dispatch
        };
    };
}

function compose(...funcs) {
    if(funcs.length === 0) {
        return arg => arg;
    }
    else
    {
        return funcs.reduce((a,b) => (arg) => a(b(arg)));
    }
}

const Reflux = {
    createStore
};



