import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Activity } from 'src/app/core/models/activity';
import * as AppState from 'src/app/state/app.state';
import * as activitiesApiActions from "./actions/activities-api.actions";
import * as activitiesPageActions from "./actions/activities-page.actions";

export interface State extends AppState.State {
  products: ActivitiesState;
}

export interface ActivitiesState {
  activities: Activity[];
  error: string;
}

const initialState: ActivitiesState = {
  activities: [],
  error: '',
};

const getActivitiesFeatureState = createFeatureSelector<ActivitiesState>('activities');

export const getActivitiesList = createSelector(getActivitiesFeatureState, (state) => state.activities);

export const getError = createSelector(getActivitiesFeatureState, (state) => state.error);

export const activitiesReducer = createReducer<ActivitiesState>(
  initialState,
  on(activitiesApiActions.loadActivitiesSuccess, (state, action): ActivitiesState => {
    return {
      ...state,
      activities: action.activities,
    };
  }),
  on(activitiesApiActions.loadActivitiesFailure, (state, action): ActivitiesState => {
    return {
      ...state,
      activities: [],
      error: action.error,
    };
  }),
  on(activitiesApiActions.createActivitySuccess, (state, action): ActivitiesState => {
    return {
      ...state,
      activities: [...state.activities, action.activity]
    };
  }),
  on(activitiesApiActions.deleteActivitySuccess, (state, action): ActivitiesState => {
    return {
      ...state,
      activities: [...state.activities.filter((item) => item.id)]
    };
  }),
);
