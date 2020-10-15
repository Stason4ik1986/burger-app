// import axios from 'axios';
import * as actionTypes from './actionTypes';

export const auth = (email, password, isSignup) => {
    // For testing thunk:
    // return dispatch => {
    //     dispatch(authStart());
    //     const authData = {
    //         email,
    //         password,
    //         returnSecureToken: true,
    //     };
    //     let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2YQOmqwqkAaR_SCZF76jflYglrARs1IM';

    //     if (!isSignup) {
    //         url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2YQOmqwqkAaR_SCZF76jflYglrARs1IM';
    //     }

    //     axios.post(url, authData)
    //         .then(response => {
    //             const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
    //             localStorage.setItem('token', response.data.idToken);
    //             localStorage.setItem('userId', response.data.localId);
    //             localStorage.setItem('expirationDate', expirationDate);
    //             dispatch(authSuccess(
    //                 response.data.idToken,
    //                 response.data.localId,
    //             ));
    //             dispatch(checkAuthTimeout(response.data.expiresIn));
    //         })
    //         .catch(error => {
    //             dispatch(authFail(error.response.data.error));
    //         })
    // };

    // For testing saga:
    return {
        type: actionTypes.AUTH_USER,
        email,
        password,
        isSignup,
    }
};

export const logout = () => {
    // For testing thunk:
    // localStorage.removeItem('token');
    // localStorage.removeItem('userId');
    // localStorage.removeItem('expirationDate');

    return {
        // For testing thunk:
        // type: actionTypes.AUTH_LOGOUT,
        // For testing saga:
        type: actionTypes.AUTH_INITIATE_LOGOUT,
    }
};

export const logoutSucceed = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error,
    }
};

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    }
};

export const authSuccess = (idToken, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userId,
        idToken,
    }
};

export const authCheckState = () => {
    // For testing thunk:
    // return dispatch => {
    //     const token = localStorage.getItem('token');

    //     if (!token) {
    //         dispatch(logout());
    //     } else {
    //         const userId = localStorage.getItem('userId');
    //         const expirationDate = new Date(localStorage.getItem('expirationDate'));

    //         if (expirationDate <= new Date()) {
    //             dispatch(logout());
    //         } else {
    //             dispatch(authSuccess(token, userId));
    //             dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
    //         }
    //     }
    // };
    // For testing saga:
    return {
        type: actionTypes.AUTH_CHECK_STATE,
    }
};

export const checkAuthTimeout = (expirationTime) => {
    // For testing thunk:
    // return dispatch => {
    //     setTimeout(() => {
    //         dispatch(logout());
    //     }, expirationTime * 1000);
    // };

    // For testing saga:
    return {
        type: actionTypes.AUTH_CHECK_TIMEOUT,
        expirationTime,
    }
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path,
    }
};

