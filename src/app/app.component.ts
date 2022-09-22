import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAuthenticationData } from './features/pages/auth/state/actions/auth-page.actions';
import { AuthState, getUser } from './features/pages/auth/state/auth.reducers';
import { UserInfo } from './features/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user$!:Observable<UserInfo | null | undefined>;
  
  constructor(private Store:Store<AuthState>) { }

  ngOnInit(): void {
    this.Store.dispatch(getAuthenticationData())
    this.user$ = this.Store.select(getUser)
  }
}
