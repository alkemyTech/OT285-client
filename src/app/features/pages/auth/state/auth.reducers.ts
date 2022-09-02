import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as UserActions from './auth.actions';

export interface authState {
    name: string,
    email: string,
    password: string,
    token: string | null,
    error: string | null
};

const initialState: authState = {
    name: '',
    email: '',
    password: '',
    token: null,
    error: null
}

const getAuthFeatureState = createFeatureSelector<authState>('auth');

// TICKET PIDE GUARDAR TOKEN EN STORAGE
// Probe utilizando el selector getToken, guardaria el token en localStorage y funciona... o deberia realizarlo en effects(?); 
/* 
En el componente login-form dentro del metodo 
    login(){
        let body: LoginForm = {
            email: this.logingForm.controls['email'].value,
            password: this.logingForm.controls['password'].value,
        };

        this.store.dispatch(UserActions.logIn(
        { form: body }
        )) 

        this.store.select(getToken).subscribe(
            token => {
                if (token){
                    localStorage.setItem('token',token)
                }        
            }
        )
    }
*/
export const getToken = createSelector(
    getAuthFeatureState,
    state => state.token
)

export const getError = createSelector(
    getAuthFeatureState,
    state => state.error
)

// Selectors for name/email/password data (??)

export const authReducer = createReducer<authState>(
    initialState,
    on(UserActions.logIn, (state): authState => {    
        return {
        ...state,
        };
    }),
    on(UserActions.logInSuccess, (state, action): authState => {  
        return {
        ...state,
        name: action.data.data.user.name,
        email: action.data.data.user.email,
        password: action.data.data.user.password,
        token: action.data.data.token,
        };
    }),
    on(UserActions.logInError, (state, action): authState => {    
        return {
        ...state,
        error: action.error
        };
    }),
    on(UserActions.logOut, (state): authState => {    
        return {
        ...state,
        name: '',
        email: '',
        password: '',
        token: null
        };
    }),
    on(UserActions.signIn, (state): authState => {    
        return {
        ...state,
        };
    }),
    on(UserActions.signInSuccess, (state, action): authState => {    
        return {
        ...state,
        name: action.data.data.user.name,
        email: action.data.data.user.email,
        password: action.data.data.user.password,
        token: action.data.data.token,
        };
    }),
    on(UserActions.signInError, (state, action): authState => {    
        console.log('original state: '+ JSON.stringify(state))
        return {
        ...state,
        error: action.error
        };
    }),
);