import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 
  ongData = {
    name: 'ONG - Somos Más',
    logo: 'http://ongapi.alkemy.org/storage/oqhHt6tOMb.png',
    redirectTo: 'home'
  }

  navegacion = [
    {
      name: 'Noticias',
      redirectTo: 'news'
    },
    {
      name: 'Actividades',
      redirectTo: 'actividades'
    },
    {
      name: 'Novedades',
      redirectTo: 'somewhere...'
    }
  ]

  social = [
    {
      name: 'Testimonios',
      redirectTo: 'somewhere...'
    },
    {
      name: 'Nosotros',
      redirectTo: 'nosotros'
    },
    {
      name: 'Contacto',
      redirectTo: 'contacto'
    },
  ]

  constructor(private router:Router) { }
  
  ngOnInit(): void {
  }

  redirectTo(route:string): void{
    this.router.navigate([route])
  }
}
