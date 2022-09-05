import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as UserActions from './auth.actions';

export interface AuthState {
    name: string,
    email: string,
    password: string,
    token: string | null,
    error: string | null
};

const initialState: AuthState = {
    name: '',
    email: '',
    password: '',
    token: null,
    error: null
}

const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const getToken = createSelector(
    getAuthFeatureState,
    state => state.token
)

export const getError = createSelector(
    getAuthFeatureState,
    state => state.error
)

export const authReducer = createReducer<AuthState>(
    initialState,
    on(UserActions.logInSuccess, (state, action): AuthState => {  
        return {
        ...state,
        name: action.data.data.user.name,
        email: action.data.data.user.email,
        password: action.data.data.user.password,
        token: action.data.data.token,
        };
    }),
    on(UserActions.logInError, (state, action): AuthState => {    
        return {
        ...state,
        error: action.error
        };
    }),
    on(UserActions.logOut, (state): AuthState => {    
        return {
        ...state,
        name: '',
        email: '',
        password: '',
        token: null
        };
    }),
    on(UserActions.signInSuccess, (state, action): AuthState => {    
        return {
        ...state,
        name: action.data.data.user.name,
        email: action.data.data.user.email,
        password: action.data.data.user.password,
        token: action.data.data.token,
        };
    }),
    on(UserActions.signInError, (state, action): AuthState => {    
        console.log('original state: '+ JSON.stringify(state))
        return {
        ...state,
        error: action.error
        };
    }),
);