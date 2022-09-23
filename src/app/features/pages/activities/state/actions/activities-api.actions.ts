import { createAction, props } from "@ngrx/store";
import { Activity } from "src/app/core/models/activity";

export const loadActivitiesSuccess = createAction(
    '[Activities API] Load Success',
    props<{ activities: Activity[] }>()
  );
  
export const loadActivitiesFailure = createAction(
  '[Activities API] Load Fail',
  props<{ error: string }>()
);

export const createActivitySuccess = createAction(
  '[Activities API] Create Success',
  props<{ activity: Activity }>()
);

export const createActivityFailure = createAction(
  '[Activities API] Create Fail',
  props<{ error: string }>()
);

export const deleteActivitySuccess = createAction(
  '[Activities API] Delete Success',
  props<{ activityID: number }>()
);

export const deleteActivityFailure = createAction(
  '[Activities API] Delete Fail',
  props<{ error: string }>()
);