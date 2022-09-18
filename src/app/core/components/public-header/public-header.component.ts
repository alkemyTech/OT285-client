import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUser } from 'src/app/features/pages/auth/state/auth.reducers';
import { AuthService, UserInfo } from 'src/app/features/services/auth.service';
import { State } from 'src/app/state/app.state';

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

  logged$!: Observable<UserInfo | null>;

  navLinks:link[] = [
    {
      name:'Inicio',
      routerlink:'home'
    },
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
      name:'Testimonios',
      routerlink:'testimonials'
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
    private store:Store<State>,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.logged$ = this.store.select(getUser) //check if user is logged
  }

  logOut(){
    this.authService.logOut()
  }

}
