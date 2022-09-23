import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs';
import { getUser } from '../features/pages/auth/state/auth.reducers';

@Injectable({
  providedIn: 'root'
})
export class AdminOnlyGuard implements CanActivate {
  validar: boolean | UrlTree = false;

  constructor(private authStore:Store<Auth>, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.authStore.select(getUser).subscribe(
        (getUser) => {
          if (getUser && getUser.admin)
          {
            this.validar = true
          } else {
            this.validar = this.router.createUrlTree(['/home']);
          }
        }
      )
      return this.validar;
    }
}
