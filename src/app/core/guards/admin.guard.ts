import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthState, getUser } from "src/app/features/pages/auth/state/auth.reducers";

@Injectable({
  providedIn: "root",
})
export class AdminGuard implements CanActivate{
  constructor(private store:Store<AuthState>) {}
  ngOnInit(): void {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree 
  {
    return this.store.select(getUser).pipe(map(res => {
      console.log(res);
      if(res?.admin){
        console.log('adminguard acepta');
        return true;
      }
      else{
        console.log('adminguard rechaza');
        return false;
      }
    }));
  }

}
