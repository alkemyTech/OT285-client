import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsersService } from "src/app/features/services/users.service";
import * as userApiActions from "./actions/users-api.actions";
import * as userPageActions from "./actions/users-page.actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UsersService) {}

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userPageActions.loadUsers),
      mergeMap(() =>
        this.userService
          .getAllUsers()
          .pipe(
            map((res) => userApiActions.loadUsersSuccess({ users: res.data })),
            catchError((err)=> of(userApiActions.loadUsersFailure({error: err.message})))
          )
      )
    );
  });
}
