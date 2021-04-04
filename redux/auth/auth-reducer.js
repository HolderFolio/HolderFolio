import { AuthActionTypes } from './auth-types'

const INITIAL_STATE = {
    currentUser: null,
    errors: {
        user: null,
    },
    loginLoading: true,
};
const AuthReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case AuthActionTypes.SET_CURRENT_USER:
            // return {...state, currentUser: null, errors: null };
            return {...state, currentUser: action.payload, errors: null };
        case AuthActionTypes.LOGOUT_SUCCESS:
            return { ...state, currentUser: action.payload, errors: null };
        case AuthActionTypes.LOGIN_LOADING:
            return { ...state, loginLoading: action.payload };
        case AuthActionTypes.ERROR_LOGIN_USER:
            return { ...state, errors: {user: action.payload} };

        default:
            return state 
    }
}

export default AuthReducer;