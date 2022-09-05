import { createAction, props } from "@ngrx/store";
import { LogInSuccess } from "src/app/core/models/log-in-success";
import { Auth } from "src/app/core/models/auth";
import { SignInSuccess } from "src/app/core/models/sign-in-success";

export const logIn = createAction(
    '[Auth] Log In',
    props<{ form : Auth }>()
);

export const logInSuccess = createAction(
    '[Auth] Log In Succes',
    props<{ data : LogInSuccess }>()
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
    props<{ form : Auth }>()
);

export const signInSuccess = createAction(
    '[Auth] Sign In Succes',
    props<{ data : SignInSuccess }>()
);

export const signInError = createAction(
    '[Auth] Sign In Error',
    props<{ error : string }>()
);