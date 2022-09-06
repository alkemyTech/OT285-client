import { createAction, createReducer, on } from "@ngrx/store";
import * as userActions from './users.actions';


export const usersReducer = createReducer(
    { show: true},
    on(userActions.getUsers, (state, actions) => {
        return {
            ...state,
            users: actions
        }
    })
)