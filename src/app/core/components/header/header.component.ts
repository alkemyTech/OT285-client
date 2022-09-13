import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Output() OpenCloseSidebar = new EventEmitter();

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
  constructor() { }

  ngOnInit(): void {
  }

  onSidebar() : void{
    this.OpenCloseSidebar.emit()
  }


}
