import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

// initial state
// we can preload state by passing an argument in createStore() after rootReducer
// such argument will represent our initialState object or any preloaded state
// we would like to start with

export const configureStore = () => {
    const middlewares = [thunk];

    const composedEnhancer = composeWithDevTools(
        applyMiddleware(...middlewares)
    );

    const store = createStore(rootReducer, composedEnhancer);

    return store;
};
