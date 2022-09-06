import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/features/services/auth.service";
import { AuthApiActions, AuthPageActions  } from "./actions";
import { catchError, map, concatMap, tap } from "rxjs/operators"
import { of } from "rxjs";

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions, private authService: AuthService){}
    
    logIn$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType(AuthPageActions.logIn),
            concatMap((action) => this.authService.logIn(action.data)
                .pipe(
                    map((res:any) => AuthApiActions.logInSuccess({res})),                   
                    catchError(error => of(AuthApiActions.logInError({error})))
                )
            )
        )
    });

    logInSucces$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType(AuthApiActions.logInSuccess),
            tap(action => localStorage.setItem('token', action.res.data.token))
        )
    });

    signIn$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType(AuthPageActions.signIn),            
            concatMap((action) => this.authService.signIn(action.data)
                .pipe(
                    map((data:any) => AuthApiActions.signInSuccess({data})),
                    catchError(error => of(AuthApiActions.signInError({error})))
                )
            )
        )
    });
}