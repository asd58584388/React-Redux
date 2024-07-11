function logger({getState, dispatch})
{
    return (action) => {
        console.log("Action: ", action);
        const returnValue= dispatch(action);
        console.log("State: ", getState());
        return returnValue;
    };
}