import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AuthState, getUser } from "../pages/auth/state/auth.reducers";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class DonationsGuard implements CanActivate {
  constructor(private router: Router, private Store: Store<AuthState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.Store.select(getUser).pipe(map((user) => {
      if (user?.admin) {
        this.router.navigate(['/home']);
      }
      return true;
    }));
  }
}
