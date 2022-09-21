import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserInfo } from 'src/app/features/services/auth.service';
import { State } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { getUser } from 'src/app/features/pages/auth/state/auth.reducers';
import { AuthPageActions } from 'src/app/features/pages/auth/state/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logged$!: Observable<UserInfo | null>;

  @Output() OpenCloseSidebar = new EventEmitter();

  constructor(
    private store:Store<State>,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.logged$ = this.store.select(getUser) //check if user is logged
  }

  onSidebar() : void{
    this.OpenCloseSidebar.emit()
  }

  logOut(){
    this.store.dispatch(AuthPageActions.logOut());
  }

}
