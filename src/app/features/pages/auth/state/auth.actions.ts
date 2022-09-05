import { createAction, props } from "@ngrx/store";
import { Auth, AuthResponse } from "src/app/core/models/auth";

export const logIn = createAction(
    '[Auth] Log In',
    props<{ data : Auth }>()
);

export const logInSuccess = createAction(
    '[Auth] Log In Succes',
    props<{ data : AuthResponse }>()
);

export const logInError = createAction(
    '[Auth] Log In Error',
    props<{ error : string }>()
);

export const logOut = createAction(
    '[Auth] Log Out'
);

export const signIn = createAction(
    '[Auth] Sign In',
    props<{ data : Auth }>()
);

export const signInSuccess = createAction(
    '[Auth] Sign In Succes',
    props<{ data : AuthResponse }>()
);

export const signInError = createAction(
    '[Auth] Sign In Error',
    props<{ error : string }>()
);