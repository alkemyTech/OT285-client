import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { getAuthenticationData } from 'src/app/features/pages/auth/state/actions/auth-page.actions';
import { AuthState } from 'src/app/features/pages/auth/state/auth.reducers';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<void> {
  constructor(private Store:Store<AuthState>){ }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {

    return this.Store.dispatch(getAuthenticationData());
  }
}
