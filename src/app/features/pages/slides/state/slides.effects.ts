import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SlidesService } from "src/app/features/services/slides.service";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import * as SlidesApiActions from "./actions/slides-api.actions";
import * as SlidesPageActions from "./actions/slides-page.actions";


@Injectable()
export class SlidesEffects {
  constructor(
    private actions$: Actions,
    private slidesService: SlidesService
  ) {}

  loadSlides$ = createEffect(() => 
    this.actions$.pipe(
      ofType(SlidesPageActions.loadSlides),
      mergeMap(() =>
        this.slidesService.getSlide().pipe(
          map((slides: any) => SlidesApiActions.loadSlidesSuccess({slides: slides.data})),
          catchError((error) => of(SlidesApiActions.loadSlidesFailure({error: error.message})))
        )
      )
    )
  );
}
