import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Activity } from 'src/app/core/models/activity'
import * as AppState from 'src/app/state/app.state';
import * as ActivitiesActions from './activities.actions'

export interface State extends AppState.State {
    products: ActivitiesState;
  }

export interface ActivitiesState {
    activities: Activity[];
  }

const initialState: ActivitiesState  = {
    activities:[]
};


const getActivitiesFeatureState = createFeatureSelector<ActivitiesState>('activities');


export const getActivitiesList = createSelector(
    getActivitiesFeatureState,
    state => state.activities
);

export const activitiesReducer = createReducer<ActivitiesState>(
    initialState,
    on(ActivitiesActions.loadActivitiesSuccess, (state, action): ActivitiesState => {
        return {
          ...state,
          activities: action.activities
        };
      }),
)