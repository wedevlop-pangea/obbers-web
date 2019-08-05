// @flow

// ACTION CREATOR - CREATES ALL THE LOGIC

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

import {
    REDUX_FORM_ERROR,
    SIGN_UP_USER,
    SIGN_IN_USER,
    SIGN_OUT_USER,
} from "../constants";

// export const reduxFormCustomError = errorMessage => {
//     console.log("************************************************************");
//     console.log("SUCCESSFULLY CALLED reduxFormError - auth actions");
//     console.log(errorMessage);
//
//     // throw new SubmissionError({
//     //     _error: "errorMessage culo2",
//     // });
//     //
//     // return dispatch => {
//     //     dispatch({ type: REDUX_FORM_ERROR, payload: { errorMessage } });
//     // };
//
//     try {
//         if (errorMessage.length === 0) {
//             console.log("reduxFormCustomError errorMessage.length 0");
//         } else {
//             console.log(
//                 "reduxFormCustomError errorMessage.length " +
//                     errorMessage.length
//             );
//             throw new SubmissionError({
//                 // _error: errorMessage,
//                 _error: "errorMessag culoe",
//             });
//         }
//     } catch (error) {
//         console.log("reduxFormCustomError catch(error)");
//         console.log(error);
//         // throw new SubmissionError({
//         //     _error: errorMessage,
//         // });
//     }
//
//     // var throwSubmissionError = errorMessage => {
//     //     throw new SubmissionError({
//     //         _error: errorMessage,
//     //     });
//     // };
//     // throwSubmissionError(errorMessage);
// };

export const firebaseSignUpEmployer = credentials => {
    // return dispatch => {
    //     dispatch({ type: SIGN_UP_USER, payload: { credentials } });
    // };

    console.log("************************************************************");
    console.log("SUCCESSFULLY CALLED firebaseSignUp - auth actions");
    console.log(credentials);
};

export const firebaseSignUpEmployee = credentials => {
    // return dispatch => {
    //     dispatch({ type: SIGN_UP_USER, payload: { credentials } });
    // };

    console.log("************************************************************");
    console.log("SUCCESSFULLY CALLED firebaseSignUp - auth actions");
    console.log(credentials);
};

export const firebaseSignIn = credentials => {
    // return dispatch => {
    //     dispatch({ type: SIGN_IN_USER, payload: { credentials } });
    // };

    let foundError;

    console.log("************************************************************");
    console.log("SUCCESSFULLY CALLED firebaseSignIn - auth actions");
    console.log(credentials);

    // var throwSubmissionError = errorMessage => {
    //     throw new SubmissionError({
    //         _error: errorMessage,
    //     });
    // };
    // throwSubmissionError("test error message");

    // var throwFuckError = errorMessage => {
    //     throw new SubmissionError({
    //         _error: errorMessage,
    //     });
    // };

    const funcOutOfGetFirebase = () => console.log("outside function!!1");

    return async (dispatch, getState, { getFirebase }) => {
        // const aFunc = async (dispatch, getState, { getFirebase }) => {
        // async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        console.log("inside signFuck");
        // funcOutOfGetFirebase();

        // return await firebase
        //     .auth()
        //     .signInWithEmailAndPassword(
        //         credentials.email,
        //         credentials.password
        //     );

        // throw new SubmissionError({
        //     _error: "firebaseSignInWithEmailAndPassword.message",
        // });

        // return new Promise((resolve, reject) => {
        //     firebase
        //         .auth()
        //         .signInWithEmailAndPassword(
        //             credentials.email,
        //             credentials.password
        //         )
        //         .then(response => {
        //             console.log("response:");
        //             console.log(response);
        //             resolve();
        //         })
        //         .catch(error => {
        //             console.log("error:");
        //             console.log(error);
        //             console.log("error.message:");
        //             console.log(error.message);
        //
        //             // const reduxFormError = new SubmissionError({
        //             //     _error: error.message,
        //             // });
        //             // reject(reduxFormError);
        //
        //             var errObj = new SubmissionError({
        //                 _error:
        //                     "User registration failed, email already exists.",
        //             }); //need to add store dispatch for failed user registration (for form feedback)
        //             reject(errObj);
        //
        //             // if (error instanceof SubmissionError) {
        //             //     console.log("reject error and SubmissionError");
        //             //     throw new SubmissionError({
        //             //         _error: error.message,
        //             //     });
        //             //     reject(error);
        //             // }
        //         });
        // });

        // const throwFuckError2 = msg => throwFuckError(msg);
        // throwFuckError2("fuck3");

        try {
            // throwSubmissionError("test error message INSIDE TRY");

            await firebase
                .auth()
                .signInWithEmailAndPassword(
                    credentials.email,
                    credentials.password
                );
            // const firebaseSignInWithEmailAndPassword = await firebase
            //     .auth()
            //     .signInWithEmailAndPassword(
            //         credentials.email,
            //         credentials.password
            //     );
            // return firebaseSignInWithEmailAndPassword;
            //
            // throwFuckError2("fuck");
        } catch (error) {
            console.log("inside catch error");
            // funcOutOfGetFirebase();

            // this.reduxFormCustomError(error.message);

            dispatch({
                type: REDUX_FORM_ERROR,
                payload: error.message,
            });

            // throwSubmissionError(error.message);
            // throwFuckError2("fuck");
            // console.log("XXXXXXXXXXXXXXXXXXX");
            // console.log(
            //     "firebaseSignIn - Redux - Reducer: Auth - Action: Auth"
            // );
            console.log("catch error");
            console.log(error);
            let foundError = error;
            // return error;
            // throw new SubmissionError({
            //     _error: error.message,
            // });
            // throw new SubmissionError(error.validationErrors); //
            // throw new SubmissionError({
            //     _error: error.message,
            // });
            // Promise.reject(new Error()) })
            // return Promise.reject(new Error()) })
            // return Promise.reject(
            //     new SubmissionError({
            //         _error: error.message,
            //     })
            // );
        }

        // throwFuckError("fuck");

        // console.log("Lets check foundError");
        // console.log(foundError);
        // if (foundError !== null || foundError !== undefined) {
        //     throw new SubmissionError({
        //         _error: foundError.message,
        //     });
        // }
    };

    // aFunc();

    // if (foundError instanceof Error) {
    //     console.log("foundError instanceof Error");
    //     throwSubmissionError(foundError.message);
    // }

    // return null;
};

export const firebaseSignOut = () => {
    // return dispatch => {
    //     dispatch({ type: SIGN_OUT_USER, payload: {} });
    // };

    console.log("************************************************************");
    console.log("SUCCESSFULLY CALLED firebaseSignOut - auth actions");

    return {
        type: SIGN_OUT_USER,
    };
};

// export function registerUser({ email, password }) {
//   return new Promise((resolve, reject) => {
//      axios.post('http://localhost:8088/api/users', { email: email, password: password })
//     .then(response => {
//        console.log('response is: ' , response, 'response.data is: ', response.data, 'response.code is: ', response.code);
//       if(response.data.success){
//         console.log('registerUser response.data.success is true')
//         cookie.save('token', response.data.token, { path: '/' });
//         store.dispatch({ type: AUTH_USER });
//         browserHistory.push('/');
//         resolve();
//        } else {
//         if(response.data.code === 11000){ //duplicate email
//           console.log('data code = 11000')
//           var errObj = new SubmissionError({_error: 'User registration failed, email already exists.' }) //need to add store dispatch for failed user registration (for form feedback)
//           reject(errObj);
//          } else if (response.code === 2) {
//           console.log('response.code = 2')
//           var errObj = new SubmissionError({ email: 'Invalid email pattern.' })
//           reject(errObj);
//          }
//       }
//     }).catch((error) => {
//       console.log('error is: ', error)
//       //errorHandler(store.dispatch, error, AUTH_ERROR)
//       if(error instanceof SubmissionError) reject(error);
//
//     });
//    })
// }
