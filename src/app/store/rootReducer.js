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
//
// import { combineReducers } from "redux";
//
// // reducers
// import testReducer from "./reducers/testReducer";
// import { firebaseReducer } from "react-redux-firebase";
// import { firestoreReducer } from "redux-firestore";
//
// const rootReducer = combineReducers({
//     test: testReducer,
//     firebase: firebaseReducer,
//     firestore: firestoreReducer,
// });
//
// export default rootReducer;
//
// *****************************************************************************
// UNCOMMENT THIS IF YOU WANT A FIREBASE/FIRESTORE REDUX STORE CONFIGURATION
// UNCOMMENT THIS IF YOU WANT REDUX FORM SETUP

import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";

// reducers
import testReducer from "./reducers/testReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
    test: testReducer,

    form: FormReducer,

    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

export default rootReducer;
