import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState, getUser } from './features/pages/auth/state/auth.reducers';
import { UserInfo } from './features/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user$!:Observable<UserInfo | null>;
  
  constructor(private Store:Store<AuthState>) { }

  ngOnInit(): void {
    this.user$ = this.Store.select(getUser)
  }
}
