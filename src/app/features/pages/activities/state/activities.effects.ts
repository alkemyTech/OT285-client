import { Injectable } from '@angular/core';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ActivitiesActions from './activities.actions';

import { ActivitiesService } from 'src/app/features/services/activities.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@Injectable()
export class ActivitiesEffects {

  constructor(
    private actions$: Actions, 
    private ActivitiesService:ActivitiesService,
    private snackBar: SnackBarService
    ) { }

  loadActivities$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ActivitiesActions.loadActivities),
        mergeMap(() => this.ActivitiesService.getActivities()
          .pipe(
            map(activities => ActivitiesActions.loadActivitiesSuccess({activities : activities.data})),
            catchError(error => {
              this.snackBar.error(error.message);
              return of(ActivitiesActions.loadActivitiesFailure({ error : error.message }))
            })
          )
        )
      );
  });
}
