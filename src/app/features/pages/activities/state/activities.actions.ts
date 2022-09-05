import { createAction, props } from "@ngrx/store";
import { Activity } from "src/app/core/models/activity";

export const loadActivities = createAction(
    '[Activities] Load'
  );


export const loadActivitiesSuccess = createAction(
    '[Activities] Load Success',
    props<{ activities: Activity[] }>()
);