import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isUserLogged } from 'src/app/features/pages/auth/state/auth.reducers';
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

  logged$!: Observable<boolean>;

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
    private store:Store<State>
  ) { }

  ngOnInit(): void {
    this.logged$ = this.store.select(isUserLogged) //check if user is logged
  }

  logout(){
    console.log('Hacer el log out')
  }

}