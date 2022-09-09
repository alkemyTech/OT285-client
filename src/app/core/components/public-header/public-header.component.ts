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


  mobile:boolean = false;

  logged:boolean = false;

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
  ) { }

  ngOnInit(): void {
    this.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) //Check if is mobile
  }

}
