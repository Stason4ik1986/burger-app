import reducer from './auth';
import * as actionsTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            error: null,
            userId: null,
            loading: false,
            authRedirectPath: '/',
        });
    });

    it('should store the token upon login', () => {
        expect(reducer({
            token: null,
            error: null,
            userId: null,
            loading: false,
            authRedirectPath: '/',
        }, {
            type: actionsTypes.AUTH_SUCCESS,
            userId: 'some-user-id',
            idToken: 'some-token-id',
        })).toEqual({
            token: 'some-token-id',
            error: null,
            userId: 'some-user-id',
            loading: false,
            authRedirectPath: '/',
        });
    });
});