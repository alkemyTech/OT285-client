import { createAction, props } from "@ngrx/store";
import { AuthResponse } from "src/app/core/models/auth";

export const logInSuccess = createAction(
    '[Auth API] Log In Succes',
    props<{ res : AuthResponse }>()
);

export const logInError = createAction(
    '[Auth API] Log In Error',
    props<{ error : string }>()
);

export const signInSuccess = createAction(
    '[Auth API] Sign In Succes',
    props<{ data : AuthResponse }>()
);

export const signInError = createAction(
    '[Auth API] Sign In Error',
    props<{ error : string }>()
);