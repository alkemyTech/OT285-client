import { createAction, props } from "@ngrx/store";
import { Category } from "src/app/core/models/category";

export const loadCategoriesSuccess = createAction(
    '[Categories API] Load categories success',
    props<{categories: Category[]}>()
)
export const loadCategoriesFailure = createAction(
    '[Categories API] Load categories failure',
    props<{error: string}>()
)