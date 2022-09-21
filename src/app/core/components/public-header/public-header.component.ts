import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthPageActions } from 'src/app/features/pages/auth/state/actions';
import { AuthState, getUser } from 'src/app/features/pages/auth/state/auth.reducers';
import { UserInfo } from 'src/app/features/services/auth.service';

interface link{
  name:string;
  routerlink:string;
}
@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent implements OnInit {

  user$!: Observable<UserInfo | null>;

  navLinks:link[] = [    
    {
      name:'Nosotros',
      routerlink:'nosotros'
    },
    {
      name:'Actividades',
      routerlink:'actividades'
    },
    {
      name:'Novedades',
      routerlink:'news'
    },
    {
      name:'Contacto',
      routerlink:'contacto'
    },
    {
      name:'Contribuye',
      routerlink:'donar'
    }
  ]

  constructor(
    private store:Store<AuthState>,
  ) { }

  ngOnInit(): void {
    this.user$ = this.store.select(getUser) //check if user is logged
  }

  logOut(){
    this.store.dispatch(AuthPageActions.logOut());
  }

}
