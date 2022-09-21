import { User, UserCredential } from "@angular/fire/auth";
import { createAction, props } from "@ngrx/store";
import { AuthResponse } from "src/app/core/models/auth";
import { UserInfo } from "src/app/features/services/auth.service";

// export const logInSuccess = createAction(
//     '[Auth API] Log In Succes',
//     props<{ res : AuthResponse }>()
// );

export const logInError = createAction(
    '[Auth API] Log In Error',
    props<{ error : string }>()
);

// export const signUpSuccess = createAction(
//     '[Auth API] Sign Up Succes',
//     props<{ data : AuthResponse }>()
// );

export const signUpSuccess = createAction(
    '[Auth API] Sign Up Succes',    
);

export const signUpError = createAction(
    '[Auth API] Sign Up Error',
    props<{ error : string }>()
);

export const Authenticated = createAction(
    '[Auth API] Authenticated',
    props<{userData: UserInfo }>()
)
export const NotAuthenticated = createAction(
    '[Auth API] Not Authenticated'
)