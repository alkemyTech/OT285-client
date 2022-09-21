import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/features/services/auth.service";
import { AuthApiActions, AuthPageActions } from "./actions";
import {
  catchError,
  map,
  concatMap,
  tap,
  switchMap,
  mergeMap,
} from "rxjs/operators";
import { of } from "rxjs";
import { AuthError, User, UserCredential } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { SnackBarService } from "src/app/shared/services/snack-bar.service";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private snackBarService: SnackBarService
  ) {}

  // logIn$ = createEffect(() => {
  //     return this.actions$
  //     .pipe(
  //         ofType(AuthPageActions.logIn),
  //         concatMap((action) => this.authService.logIn(action.data)
  //             .pipe(
  //                 map((res:any) => AuthApiActions.logInSuccess({res})),
  //                 catchError(error => of(AuthApiActions.logInError({error})))
  //             )
  //         )
  //     )
  // });

  logIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthPageActions.logIn),
      switchMap((action) =>
        this.authService.logIn(action.user).pipe(
          map(() => AuthPageActions.getAuthenticationData()),
          catchError((error: AuthError) =>
            of(AuthApiActions.logInError({ error: error.message }))
          )
        )
      )
    )
  );

  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthPageActions.signUp),
      switchMap((action) =>
        this.authService.signUp(action.user).pipe(
          map(() => AuthApiActions.signUpSuccess()),
          catchError((error: AuthError) =>
            of(AuthApiActions.signUpError({ error: error.message }))
          )
        )
      )
    )
  );

  signUpSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthApiActions.signUpSuccess),
        tap(() => {
          this.snackBarService.succes("Registro realizado con exito"),
          this.router.navigate([""]);
        })
      ),
    { dispatch: false }
  );

  logOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthPageActions.logOut),
      switchMap(() =>
        this.authService.logOut()
        .pipe(
          map(() => {
            this.router.navigate(['auth/login'])
            return AuthPageActions.logOut()
          })
        )
      )
    )
  );

  // logInSucces$ = createEffect(() =>
  //     this.actions$
  //     .pipe(
  //         ofType(AuthApiActions.logInSuccess),
  //         tap(action => this.authService.setToken(action.res.data.token))

  //     ), { dispatch: false }
  // );

  // signIn$ = createEffect(() => {
  //     return this.actions$
  //     .pipe(
  //         ofType(AuthPageActions.signIn),
  //         concatMap((action) => this.authService.signIn(action.data)
  //             .pipe(
  //                 map((data:any) => AuthApiActions.signInSuccess({data})),
  //                 catchError(error => of(AuthApiActions.signInError({error})))
  //             )
  //         )
  //     )
  // });

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthPageActions.getAuthenticationData),
      switchMap(() =>
        this.authService.getUserData().pipe(
          map((authData) => {
            const userData = authData;
            if (userData) {
              this.router.navigate(['']);
              return AuthApiActions.Authenticated({ userData: userData });
            }
            return AuthApiActions.NotAuthenticated();
          }),
          catchError((error: AuthError) =>
            of(AuthApiActions.logInError({ error: error.message }))
          )
        )
      )
    )
  );

  logInWithGoogle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthPageActions.logInWithGoogle),
      switchMap(() =>
        this.authService.loginWithGoogle().pipe(
          map(() => AuthPageActions.getAuthenticationData()),
          catchError((error: AuthError) =>
            of(AuthApiActions.logInError({ error: error.message }))
          )
        )
      )
    )
  );
}
