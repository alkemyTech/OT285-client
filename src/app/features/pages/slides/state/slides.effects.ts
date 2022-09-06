import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SlidesService } from "src/app/features/services/slides.service";
import * as SlidesActions from "./slides.actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class SlidesEffects {
  constructor(
    private actions$: Actions,
    private slidesService: SlidesService
  ) {}

  loadSlides$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SlidesActions.loadSlides),
      mergeMap(() =>
        this.slidesService.getSlide().pipe(
          map((slides) => SlidesActions.loadSlidesSuccess({ slides })),
          catchError((error) => of(SlidesActions.loadSlidesFailure({ error })))
        )
      )
    );
  });
}
