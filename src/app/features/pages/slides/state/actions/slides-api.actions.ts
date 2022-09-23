import { createAction, props } from "@ngrx/store";
import { Slide } from "src/app/core/models/slide";

export const loadSlides = createAction("[slides] Load slides");

export const loadSlidesSuccess = createAction(
  "[Slides API] Load success",
  props<{ slides: Slide[] }>()
);

export const loadSlidesFailure = createAction(
  "[Slides API] Load fail",
  props<{ error: string }>()
);
