import { SubmissionError } from "redux-form";
// SubmissionError from redux-form allows us to throw error feedback in our forms
// by just doing the next in our catch function:
// try {
// } catch (error) {
//     console.log(error);
//     throw new SubmissionError({
//         _error: error.message,
//     });
// }
// NOTE: SubmissionError object must include the key _error which has the message

import { SIGN_UP_USER, SIGN_IN_USER, SIGN_OUT_USER } from "../constants";

export const firebaseSignUp = credentials => {
    // return dispatch => {
    //     dispatch({ type: SIGN_UP_USER, payload: { credentials } });
    // };
};

export const firebaseSignIn = credentials => {
    // return dispatch => {
    //     dispatch({ type: SIGN_IN_USER, payload: { credentials } });
    // };
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        try {
            await firebase
                .auth()
                .signInWithEmailAndPassword(
                    credentials.email,
                    credentials.password
                );
        } catch (error) {
            console.log(error);
            throw new SubmissionError({
                _error: error.message,
            });
        }
    };
};

export const firebaseSignOut = () => {
    // return dispatch => {
    //     dispatch({ type: SIGN_OUT_USER, payload: {} });
    // };
    return {
        type: SIGN_OUT_USER,
    };
};
