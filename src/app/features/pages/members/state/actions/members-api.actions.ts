import { createAction, props } from "@ngrx/store";
import { Member } from "src/app/core/models/member";

export const loadMembersSuccess = createAction(
  '[Members API] Load members success',
  props<{ members: Member[]}>()
);
export const loadMembersFailure = createAction(
  '[Members API] Load members failure',
  props<{error: string}>()
)