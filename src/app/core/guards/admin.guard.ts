import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, of, Subscription } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";
import { getAuthenticationData } from "src/app/features/pages/auth/state/actions/auth-page.actions";
import { AuthState, getUser } from "src/app/features/pages/auth/state/auth.reducers";
import { AuthService, UserInfo } from "src/app/features/services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AdminGuard implements CanActivate, OnInit {
  user$!:Observable<UserInfo | null>; 
  userSub: Subscription = new Subscription;
  val = false;

  constructor(private authService: AuthService, private store:Store<AuthState>) {}
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
    // return this.store.select(getUser).pipe(map(res => {
    //   console.log(res);
    //   if(res?.admin){
    //     console.log(true);
    //     return true;
    //   }
    //   else{
    //     console.log(false);
    //     return false;
    //   }
    // }))

    this.user$ = this.store.select(getUser);

    this.store.select(getUser).subscribe(res => {
      console.log(res);
      if(res){
        if(res?.admin){
          console.log(true);
          this.val = true
        }
        else{
          console.log(false);
          this.val = false
        }
      }
    })
    console.log('val', this.val);
    
    return this.val;
  }

}
