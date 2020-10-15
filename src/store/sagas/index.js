import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
    logoutSaga,
    authUserSaga,
    authCheckState,
    checkAuthTimeoutSaga,
} from './auth';

import {
    fetchOrdersSaga,
    purchaseBurgerSaga,
} from './order';

import {
    initIngredientsSaga,
} from './burgerBuilder';

export function* watchAuth() {
    yield all([
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckState),
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
        takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    ]);
}

export function* watchOrder() {
    yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
    yield takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
}

export function* watchBurgerBuilder() {
    yield takeEvery(actionTypes.INIT_INGREDIENT, initIngredientsSaga);
}