// REDUCER = UPDATES THE STATE OBJECT

import {
    IS_AUTHENTICATED,
    SIGN_UP_USER,
    SIGN_IN_USER,
    SIGN_OUT_USER,
    REDUX_FORM_ERROR,
} from "../constants";
import initialState from "../initialState";

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTHENTICATED:
            return {
                ...state,
                // aPieceOfStateHere: action.payload
                isAuthenticated: action.payload.isAuthenticated,
                uid: action.payload.uid,
            };
        case REDUX_FORM_ERROR:
            return {
                ...state,
                // aPieceOfStateHere: action.payload
                reduxFormError: action.payload,
            };
        case SIGN_UP_USER:
            return {
                ...state,
                // aPieceOfStateHere: action.payload
            };
        case SIGN_IN_USER:
            return {
                ...state,
                // aPieceOfStateHere: action.payload
                isAuthenticated: action.payload.isAuthenticated,
                uid: action.payload.uid,
            };
        case SIGN_OUT_USER:
            return {
                ...state,
                // aPieceOfStateHere: action.payload
            };
        default:
            return state;
    }
};

export default authReducer;
