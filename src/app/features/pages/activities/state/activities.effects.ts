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
            map(activities =>{ 
                console.log(activities)
                return ActivitiesActions.loadActivitiesSuccess({activities : activities.data})
             } ),
            // catchError(error => 
            //     // of(ProductActions.loadProductsFailure({ error })
            //     console.log(error)
            //     return 
            // ))
          )
        )
      );
  });
}
