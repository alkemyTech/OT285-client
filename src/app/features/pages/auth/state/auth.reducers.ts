import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { UserInfo } from "src/app/features/services/auth.service";
import { AuthApiActions, AuthPageActions  } from "./actions";

export interface AuthState {
    // name: string,
    // email: string,
    // password: string,
    // token: string | null,
    error: string | null,
    userData:UserInfo | null
};

const initialState: AuthState = {
    // name: '',
    // email: '',
    // password: '',
    // token: null,
    error: null,
    userData: null
}

const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

// export const getToken = createSelector(
//     getAuthFeatureState,
//     state => state.token
// )

export const getError = createSelector(
    getAuthFeatureState,
    state => state.error
)

export const isUserLogged = createSelector(
    getAuthFeatureState,
    state => state.userData !== null
)

export const getUser = createSelector(
    getAuthFeatureState,
    state => state.userData
)



export const authReducer = createReducer<AuthState>(
    initialState,
    // on(AuthApiActions.logInSuccess, (state, action): AuthState => {  
    //     return {
    //     ...state,
    //     name: action.res.data.user.name,
    //     email: action.res.data.user.email,
    //     password: action.res.data.user.password,
    //     token: action.res.data.token,
    //     };
    // }),
    on(AuthApiActions.logInError, (state, action): AuthState => {    
        return {
        ...state,
        error: action.error,
        };
    }),
    // on(AuthPageActions.logOut, (state): AuthState => {    
    //     return {
    //     ...state,
    //     name: '',
    //     email: '',
    //     password: '',
    //     token: null
    //     };
    // }),
    // on(AuthApiActions.signInSuccess, (state, action): AuthState => {    
    //     return {
    //     ...state,
    //     name: action.data.data.user.name,
    //     email: action.data.data.user.email,
    //     password: action.data.data.user.password,
    //     token: action.data.data.token,
    //     };
    // }),
    // on(AuthApiActions.signInError, (state, action): AuthState => {    
    //     console.log('original state: '+ JSON.stringify(state))
    //     return {
    //     ...state,
    //     error: action.error
    //     };
    // }),
    on(AuthApiActions.Authenticated, (state, action): AuthState => {    

        console.log(action)
        return {
        ...state,
        userData:action.userData
        };
    }),
    on(AuthApiActions.NotAuthenticated, (state): AuthState => {    
        return {
        ...state,
        userData:null
        };
    }),
);
