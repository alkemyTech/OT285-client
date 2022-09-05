import { Injectable } from '@angular/core';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ActivitiesActions from './activities.actions';

import { ActivitiesService } from 'src/app/features/services/activities.service';

@Injectable()
export class ActivitiesEffects {

  constructor(
    private actions$: Actions, 
    private ActivitiesService:ActivitiesService
    ) { }

  loadActivities$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ActivitiesActions.loadActivities),
        mergeMap(() => this.ActivitiesService.getActivities()
          .pipe(
            map(activities => ActivitiesActions.loadActivitiesSuccess({activities : activities.data})),
            catchError(error => of(ActivitiesActions.loadActivitiesFailure({ error : error.message })))
          )
        )
      );
  });
}
