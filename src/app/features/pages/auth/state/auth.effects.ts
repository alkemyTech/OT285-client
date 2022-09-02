import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/features/services/auth.service";
import * as AuthActions from "./auth.actions";
import { catchError, map, concatMap, tap } from "rxjs/operators"
import { of } from "rxjs";

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions, private authService: AuthService){}
    
    logIn$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType(AuthActions.logIn),
            concatMap((action) => this.authService.logIn(action.form)
                .pipe(
                    map((data:any) => AuthActions.logInSuccess({data})),                   
                    catchError(error => of(AuthActions.logInError({error})))
                )
            )
        )
    });

    signIn$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType(AuthActions.signIn),            
            concatMap((action) => this.authService.signIn(action.form)
                .pipe(
                    map((data:any) => AuthActions.signInSuccess({data})),
                    catchError(error => of(AuthActions.signInError({error})))
                )
            )
        )
    });
}