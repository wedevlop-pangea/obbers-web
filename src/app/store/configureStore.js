// *****************************************************************************
// UNCOMMENT THIS IF YOU WANT A CLEAN REDUX STORE CONFIGURATION
//
// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./rootReducer";
// import thunk from "redux-thunk";
//
// // initial state
// // we can preload state by passing an argument in createStore() after rootReducer
// // such argument will represent our initialState object or any preloaded state
// // we would like to start with
//
// export const configureStore = () => {
//     const middlewares = [thunk];
//
//     const composedEnhancer = composeWithDevTools(
//         applyMiddleware(...middlewares)
//     );
//
//     const store = createStore(rootReducer, composedEnhancer);
//
//     return store;
// };
//
// *****************************************************************************
// UNCOMMENT THIS IF YOU WANT A FIREBASE/FIRESTORE REDUX STORE CONFIGURATION

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import firebase from "../services/firebase";

// react redux firebase configuration
const rrfConfig = {
    userProfile: "users",
    attachAuthIsReady: true,
    useFirestoreForProfile: true,
};

// let store;
// let composedEnhancer;

export const configureStore = () => {
    const middlewares = [
        thunk.withExtraArgument({ getFirebase, getFirestore }),
    ];

    const composedEnhancer = composeWithDevTools(
        // composedEnhancer = composeWithDevTools(
        applyMiddleware(...middlewares),
        reactReduxFirebase(firebase, rrfConfig),
        reduxFirestore(firebase)
    );

    const store = createStore(rootReducer, composedEnhancer);

    return store;
};

// export const exportedStore = store;
// export const exportedComposedEnhancer = composedEnhancer;
