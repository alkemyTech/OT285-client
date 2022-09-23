import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as activitiesApiActions from "./actions/activities-api.actions";
import * as activitiesPageActions from "./actions/activities-page.actions";

import { ActivitiesService } from 'src/app/features/services/activities.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { Activity } from 'src/app/core/models/activity';

@Injectable()
export class ActivitiesEffects {

  constructor(
    private actions$: Actions, 
    private ActivitiesService:ActivitiesService,
    private snackBar: SnackBarService,
    private snackBarService: SnackBarService
    ) { }

  loadActivities$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(activitiesPageActions.loadActivities),
        mergeMap(() => this.ActivitiesService.getActivities()
          .pipe(
            map(activities => activitiesApiActions.loadActivitiesSuccess({activities : activities.data})),
            catchError(error => {
              this.snackBar.error(error.message);
              return of(activitiesApiActions.loadActivitiesFailure({ error : error.message }))
            })
          )
        )
      );
  });
  createActivity$ = createEffect(() => {
    return this.actions$
    .pipe(
      ofType(activitiesPageActions.createActivity),
      mergeMap((action) => this.ActivitiesService.createActivity(action.activity)
      .pipe(
        map((res:Activity) => 
        activitiesApiActions.createActivitySuccess({activity:res})),
        catchError(error => of(activitiesApiActions.createActivityFailure({error})))
      ))
    )
  })
  createActivitySuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(activitiesApiActions.createActivitySuccess),
        tap(() => this.snackBarService.succes("Actividad creada con exito"))
      ),
    { dispatch: false }
  );
  deleteActivity$ = createEffect(() => {
    return this.actions$
    .pipe(
      ofType(activitiesPageActions.deleteActivity),
      mergeMap((action) => this.ActivitiesService.deleteActivity(action.activityID)
      .pipe(
        map((res:number) => 
        activitiesApiActions.deleteActivitySuccess({activityID:res})),
        catchError(error => of(activitiesApiActions.deleteActivityFailure({error})))
      ))
    )
  })
  deleteActivitySuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(activitiesApiActions.deleteActivitySuccess),
        tap(() => this.snackBarService.succes("Actividad eliminada con exito"))
      ),
    { dispatch: false }
  );
}
