import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga/effects';

import axios from 'axios';
import * as actions from '../actions';

export function* logoutSaga(action) {
    yield call([localStorage, 'removeItem'], 'token');
    yield call([localStorage, 'removeItem'], 'userId');
    yield call([localStorage, 'removeItem'], 'expirationDate');
    yield put(actions.logoutSucceed());
}

export function* authUserSaga(action) {
    yield put(actions.authStart());

    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true,
    };
    const url = action.isSignup ?
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2YQOmqwqkAaR_SCZF76jflYglrARs1IM' :
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2YQOmqwqkAaR_SCZF76jflYglrARs1IM';

    try {
        const response = yield axios.post(url, authData);
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        yield localStorage.setItem('token', response.data.idToken);
        yield localStorage.setItem('userId', response.data.localId);
        yield localStorage.setItem('expirationDate', expirationDate);
        yield put(actions.authSuccess(response.data.idToken, response.data.localId));
        yield put(actions.checkAuthTimeout(response.data.expiresIn));
    } catch (error) {
        yield put(actions.authFail(error.response.data.error));
    }
}

export function* authCheckState(action) {
    const token = yield localStorage.getItem('token');

    if (!token) {
        yield put(actions.logout());
    } else {
        const expirationDate = yield new Date(localStorage.getItem('expirationDate'));

        if (expirationDate <= new Date()) {
            yield put(actions.logout());
        } else {
            const userId = yield localStorage.getItem('userId');
            yield put(actions.authSuccess(token, userId));
            yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
        }
    }
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout());
}