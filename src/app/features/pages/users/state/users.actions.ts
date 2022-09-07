import { createAction, props } from "@ngrx/store";
import { User } from "src/app/core/models/user";

export const loadUsers = createAction(
    'Cargar usuarios'
)
export const loadUsersSuccess = createAction(
    'Cargar usuarios success',
    props<{users: User[]}>()
)
export const loadUsersFailure = createAction(
    'Cargar usuarios failure',
    props<{error: string}>()
)