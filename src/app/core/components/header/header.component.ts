import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items = [
    {
      name: 'Usuarios',
      route: 'backoffice/users'
    },
    {
      name: 'Categorias',
      route: 'backoffice/categories'
    },
    {
      name: 'Actividades',
      route: 'backoffice/activities'
    },
    {
      name: 'Organizacion',
      route: 'backoffice/organization'
    },
    {
      name: 'Slides',
      route: 'backoffice/slides'
    },
  ]
  isLogged = false;
  constructor() { }

  ngOnInit(): void {
    const token = localStorage.getItem("token");
    if(token){
      this.isLogged = true;
    }
  }


}
