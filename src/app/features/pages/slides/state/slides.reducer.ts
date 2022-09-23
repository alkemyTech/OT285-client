import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from "@ngrx/store";
import { Slide } from "src/app/core/models/slide";
import * as AppState from "src/app/state/app.state";
import * as slidesApiActions from "./actions/slides-api.actions";

export interface State extends AppState.State {
  slides: SlidesState;
}

export interface SlidesState {
  slides: Slide[];
  error: string;
}

const initialState: SlidesState = {
  slides: [],
  error: "",
};

const getSlidesFeatureState = createFeatureSelector<SlidesState>("slides");

export const getSlides = createSelector(
  getSlidesFeatureState,
  (state) => state.slides
);

export const getError = createSelector(
  getSlidesFeatureState,
  (state) => state.error
);

export const slidesReducer = createReducer<SlidesState>(
  initialState,
  on(slidesApiActions.loadSlidesSuccess, (state, action): SlidesState => {
    return {
      ...state,
      slides: action.slides,
      error: "",
    };
  }),
  on(slidesApiActions.loadSlidesFailure, (state, action): SlidesState => {
    return {
      ...state,
      slides: [],
      error: action.error,
    };
  })
);
