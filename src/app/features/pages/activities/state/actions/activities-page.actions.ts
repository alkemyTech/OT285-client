import { createAction, props } from "@ngrx/store";
import { Activity } from "src/app/core/models/activity";

export const loadActivities = createAction(
    '[Activities Page] Load'
);
export const createActivity = createAction(
    '[Activities Page] Create',
    props<{ activity : Activity}>()
);
export const deleteActivity = createAction(
    '[Activities Page] Delete',
    props<{ activityID : number}>()
);