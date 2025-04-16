# React and Redux Implementation

This repository contains custom implementations of React and Redux libraries from scratch. It demonstrates the core principles and mechanics behind these popular JavaScript libraries.

## Project Structure

```
├── React/
│   └── index.js      # Custom React implementation
└── Redux/
    ├── index.js      # Custom Redux implementation
    └── app.js        # Example Redux middleware

```

## React Implementation

The custom React implementation in `React/index.js` includes:

- Virtual DOM implementation
- Fiber architecture for incremental rendering
- Function components support
- Hooks implementation (useState)
- Reconciliation algorithm
- Event handling

This implementation demonstrates how React works under the hood, including its:
- Component rendering process
- Diffing algorithm
- Fiber-based work scheduling
- State management

## Redux Implementation

The custom Redux implementation in `Redux/index.js` includes:

- `createStore` function for creating a Redux store
- State management with reducers
- Subscription system
- Middleware support with `applyMiddleware`
- Enhancer pattern
- Compose utility for functional composition

The `Redux/app.js` file demonstrates a simple logger middleware implementation.

## Purpose

This project serves as an educational resource for understanding the core principles behind React and Redux. By implementing these libraries from scratch, it provides insight into:

1. How the virtual DOM works
2. How React's fiber architecture enables incremental rendering
3. How Redux manages state with a unidirectional data flow
4. How middleware extends Redux functionality

## Usage

This implementation is for learning purposes and not meant for production use. To explore how these implementations work:

1. Study the source code to understand the core concepts
2. Create your own simple applications using these implementations
3. Compare with the official React and Redux libraries to see the similarities and differences

