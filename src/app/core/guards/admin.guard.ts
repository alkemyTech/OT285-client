import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "src/app/features/services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AdminGuard implements CanActivate{
  constructor(private authService: AuthService, private router: Router) {}
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
    return this.authService.getUserData().pipe(map(res => {
      console.log(res);
      if(res?.admin){
        console.log('adminguard acepta');
        return true;
      }
      else{
        console.log('adminguard rechaza');
        return this.router.createUrlTree(['/home']);
        ;
      }
    }));
  }

}
