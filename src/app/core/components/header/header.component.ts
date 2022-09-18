import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from 'src/app/features/services/auth.service';
import { State } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { getUser } from 'src/app/features/pages/auth/state/auth.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logged$!: Observable<UserInfo | null>;

  @Output() OpenCloseSidebar = new EventEmitter();

  constructor(
    private store:Store<State>
  ) { }

  ngOnInit(): void {
    this.logged$ = this.store.select(getUser) //check if user is logged
  }

  onSidebar() : void{
    this.OpenCloseSidebar.emit()
  }


}
