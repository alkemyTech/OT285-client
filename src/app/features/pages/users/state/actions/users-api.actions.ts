import { createAction, props } from "@ngrx/store";
import { User } from "src/app/core/models/user";

export const loadUsersSuccess = createAction(
    '[Users API] Load users success',
    props<{users: User[]}>()
)
export const loadUsersFailure = createAction(
    '[Users API] Load users failure',
    props<{error: string}>()
)