import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MembersService } from '../members.service';
import * as membersApiActions from "./actions/members-api.actions";
import * as membersPageActions from "./actions/members-page.actions";

@Injectable()
export class MembersEffects {
 
  loadMembers$ = createEffect(() => this.actions$.pipe(
    ofType(membersPageActions.loadMembers),
    mergeMap(() => this.membersService.getAllMembers().pipe(
        map((members) => membersApiActions.loadMembersSuccess({members: members.data})),
        catchError((err) => of(membersApiActions.loadMembersFailure({error: err.message})))
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private membersService: MembersService
  ) {}
}