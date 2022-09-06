import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { merge } from "rxjs";
import { UsersService } from "src/app/features/services/users.service";
import * as UsersActions from "./users.actions";

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
    );
  });
}
