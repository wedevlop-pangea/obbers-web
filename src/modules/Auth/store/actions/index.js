// @flow

// ACTION CREATOR - CREATES ALL THE LOGIC

import { SubmissionError } from "redux-form";

import {
    IS_AUTHENTICATED,
    SIGN_UP_USER,
    SIGN_IN_USER,
    SIGN_OUT_USER,
    REDUX_FORM_ERROR,
} from "../constants";

export const isAuthenticated = () => {
    // return dispatch => {
    //     dispatch({ type: IS_AUTHENTICATED, payload: { credentials } });
    // };

    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        try {
            const user = await firebase.auth().currentUser();

            console.log("auth reducer action isAuthenticated");
            console.log("user");
            console.log(user);

            let isAuthenticated = false;

            if (user !== undefined || user !== null || user !== "") {
                isAuthenticated = true;
            }

            dispatch({
                type: IS_AUTHENTICATED,
                payload: {
                    isAuthenticated: isAuthenticated,
                    uid: "",
                },
            });
        } catch (error) {
            // FIREBASE_ERROR_SIGNOUT
            // dispatch({
            //     type: REDUX_FORM_ERROR,
            //     payload: error.message,
            // });
        }
    };
};

export const firebaseSignUpEmployer = credentials => {
    // return dispatch => {
    //     dispatch({ type: SIGN_UP_USER, payload: { credentials } });
    // };

    console.log("************************************************************");
    console.log("SUCCESSFULLY CALLED firebaseSignUp - auth actions");
    console.log(credentials);
};

export const firebaseSignUpEmployee = employee => {
    // return dispatch => {
    //     dispatch({ type: SIGN_UP_USER, payload: { credentials } });
    // };

    console.log("************************************************************");
    console.log("SUCCESSFULLY CALLED REDUX ACTION firebaseSignUp - EMPLOYEE");
    console.log(employee);

    const { email, password } = employee;
    let displayName = employee.name;

    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        try {
            let createdUser = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
            console.log(createdUser);

            await createdUser.user.updateProfile({
                displayName: displayName,
            });

            // This is the object saved to the Collection at the Firestore Database
            let newUser = {
                displayName: displayName,
                createdAt: firestore.FieldValue.serverTimestamp(),

                name: employee.name ? employee.name : "",
                lastName: employee.lastName ? employee.lastName : "",
                email: employee.email ? employee.email : "",
                password: employee.password ? employee.password : "",
                birthdate: employee.birthdate ? employee.birthdate : "",
                country: employee.country ? employee.country : "",
                zipcode: employee.zipCode ? employee.zipCode : "",
                city: employee.city ? employee.city : "",
                state: employee.state ? employee.state : "",
                addressLine1: employee.addressLine1
                    ? employee.addressLine1
                    : "",
                addressLine2: employee.addressLine2
                    ? employee.addressLine2
                    : "",
                phone: employee.phone ? employee.phone : "",
                position: employee.skill ? employee.skill : "",
                positions: employee.skills ? employee.skills : "",
            };

            const uid = createdUser.user.uid;

            // use firestore.set when you have a uid, use firestore.add when not
            await firestore.set(`employees/${uid}`, { ...newUser });
        } catch (error) {
            dispatch({
                type: REDUX_FORM_ERROR,
                payload: error.message,
            });
        }
    };
};

export const firebaseSignIn = credentials => {
    // return dispatch => {
    //     dispatch({ type: SIGN_IN_USER, payload: { credentials } });
    // };

    console.log("************************************************************");
    console.log("SUCCESSFULLY CALLED firebaseSignIn - auth actions");
    console.log(credentials);

    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        // return await firebase
        //     .auth()
        //     .signInWithEmailAndPassword(
        //         credentials.email,
        //         credentials.password
        //     );

        // return new Promise((resolve, reject) => {
        //     firebase
        //         .auth()
        //         .signInWithEmailAndPassword(
        //             credentials.email,
        //             credentials.password
        //         )
        //         .then(response => {
        //             resolve();
        //         })
        //         .catch(error => {
        //             reject(err);
        //         });
        // });

        try {
            // SIGN_IN
            //
            let uid;

            await firebase
                .auth()
                .signInWithEmailAndPassword(
                    credentials.email,
                    credentials.password
                )
                .then(result => {
                    uid = result.user.uid;
                });

            dispatch({
                type: SIGN_IN_USER,
                payload: {
                    isAuthenticated: true,
                    uid: uid,
                },
            });

            // return;
            // let data = (async function() {
            //     return await firebase
            //         .auth()
            //         .signInWithEmailAndPassword(
            //             credentials.email,
            //             credentials.password
            //         );
            // })();
            // const authData = async () => {
            //     return await firebase
            //         .auth()
            //         .signInWithEmailAndPassword(
            //             credentials.email,
            //             credentials.password
            //         );
            // };
            // await authData();
            // const data = await firebase
            // // await firebase
            //     .auth()
            //     .signInWithEmailAndPassword(
            //         credentials.email,
            //         credentials.password
            //     );

            // SIGN_OUT
            //
            // await firebase.auth().signOut();
            //
            // dispatch({
            //     type: SIGN_OUT_USER,
            //     payload: {
            //         isAuthenticated: false,
            //         uid: "",
            //     },
            // });
        } catch (error) {
            dispatch({
                type: REDUX_FORM_ERROR,
                payload: error.message,
            });
        }
    };
};

export const firebaseSignOut = () => {
    // return dispatch => {
    //     dispatch({ type: SIGN_OUT_USER, payload: {} });
    // };

    console.log("************************************************************");
    console.log("SUCCESSFULLY CALLED firebaseSignOut - auth actions");

    // return {
    //     type: SIGN_OUT_USER,
    // };

    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        try {
            await firebase.auth().signOut();

            dispatch({
                type: SIGN_OUT_USER,
                payload: {
                    isAuthenticated: false,
                    uid: "",
                },
            });
        } catch (error) {
            // FIREBASE_ERROR_SIGNOUT
            // dispatch({
            //     type: REDUX_FORM_ERROR,
            //     payload: error.message,
            // });
        }
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
