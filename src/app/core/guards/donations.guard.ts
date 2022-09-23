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
import { map } from 'rxjs/operators';
import { AuthState, getUser } from "src/app/features/pages/auth/state/auth.reducers";

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
      if(user == null){
        this.router.navigate(['auth/login']);
        return false;
      }
      if (user?.admin) {
        this.router.navigate(['/home']);
        return false
      }
      return true;
    }));
  }
}
