import { User, UserCredential } from "@angular/fire/auth";
import { createAction, props } from "@ngrx/store";
import { AuthResponse } from "src/app/core/models/auth";
import { UserInfo } from "src/app/features/services/auth.service";

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

export const Authenticated = createAction(
    '[Auth API] Authenticated',
    props<{userData: UserInfo }>()
)
export const NotAuthenticated = createAction(
    '[Auth API] Not Authenticated'
)