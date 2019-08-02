// REDUCER = UPDATES THE STATE OBJECT

import {
    REDUX_FORM_ERROR,
    SIGN_UP_USER,
    SIGN_IN_USER,
    SIGN_OUT_USER,
} from "../constants";
import initialState from "../initialState";

const authReducer = (state = initialState, action) => {
    switch (action.type) {
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
