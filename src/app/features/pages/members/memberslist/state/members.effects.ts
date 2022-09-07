import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MembersService } from '../../members.service';

 
@Injectable()
export class MembersEffects {
 
  loadMembers$ = createEffect(() => this.actions$.pipe(
    ofType('[Members List] Add Members'),
    mergeMap(() => this.httpService.getAllMembers()
      .pipe(
        map(members => ({ type: '[Members List/API] Retrieve Members Succes', items : members.data })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private httpService: MembersService
  ) {}
}