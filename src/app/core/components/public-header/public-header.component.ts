import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
