import { createAction, props } from "@ngrx/store";
import { Auth } from "src/app/core/models/auth";
import { AuthResponse } from "src/app/core/models/auth-response";

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