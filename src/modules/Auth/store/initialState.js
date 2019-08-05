// // // -----------------------------------------------------------------------------
//
// // import { createStore } from "redux";
// // // import reducers from "./reducers";
// // import reducers from "../../../app/store/rootReducer";
// //
// // const store = createStore(reducers);
// //
// // // // export store
// // // export default store;
// //
// // // // import store
// // // import store from "./store";
//
// // // -----------------------------------------------------------------------------
//
import { configureStore } from "../../../app/store/configureStore";
// // import { exportedStore as store } from "../../../app/store/configureStore";
// import store from "../../../app/store/store";
//
// const store = configureStore();
//
// let state;
// state = store.getState();
//
// let unsubscribe = store.subscribe(function() {
//     state = store.getState();
// });

// INITIAL STATE OBJECT

const initialState = {
    reduxFormError: "",
    isAuthenticated: true,
    uid: "",
    // reduxFormError: state.auth.reduxFormError,
    // isAuthenticated: state.auth.isAuthenticated,
    // uid: state.auth.uid,
};

export default initialState;
