// *****************************************************************************
// UNCOMMENT THIS IF YOU WANT A CLEAN REDUX STORE CONFIGURATION
//
// import { combineReducers } from "redux";
//
// // reducers
// import testReducer from "./reducers/testReducer";
//
// const rootReducer = combineReducers({
//     test: testReducer,
// });
//
// export default rootReducer;
//
// *****************************************************************************
// UNCOMMENT THIS IF YOU WANT A FIREBASE/FIRESTORE REDUX STORE CONFIGURATION

import { combineReducers } from "redux";

// reducers
import testReducer from "./reducers/testReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
    test: testReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

export default rootReducer;
