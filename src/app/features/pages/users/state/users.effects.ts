import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsersService } from "src/app/features/services/users.service";
import * as userActions from "./users.actions";
import { mergeMap, map } from "rxjs/operators";
@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UsersService) {}

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.loadUsers),
      mergeMap(() =>
        this.userService.getAllUsers().pipe(map(res =>
            userActions.loadUsersSuccess({users: res.data})
        ))
        )
    );
  });
}
