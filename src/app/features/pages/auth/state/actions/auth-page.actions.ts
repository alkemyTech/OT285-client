import { Action, createAction, props } from "@ngrx/store";
import { User } from "src/app/core/models/user";


// export const logIn = createAction(
//     '[Auth Page] Log In',
//     props<{ data : User }>()
// );
export const logIn = createAction(
        '[Auth Page] Log In',
        props<{ user : User}>()
    );

export const logOut = createAction(
    '[Auth Page] Log Out'
);

export const signIn = createAction(
    '[Auth Page] Sign In',
    props<{ data : User }>()
);

export const logInWithGoogle = createAction(
    '[Auth Page] Log In with Google'
)

export const getAuthenticationData = createAction(
    '[Auth Page] Get User Data from google'
)