import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUser } from 'src/app/features/pages/auth/state/auth.reducers';
import { UserInfo } from 'src/app/features/services/auth.service';
import { State } from 'src/app/state/app.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private logged$!: Observable<UserInfo | null>;
  private isLogged: boolean = false;
  
  constructor(private store: Store<State>, private router: Router){
    this.logged$ = this.store.select(getUser);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.logged$
      ? (this.isLogged = false, this.router.navigate(['/home']))
      : (this.isLogged = true);

    return this.isLogged;
  }
  
}
