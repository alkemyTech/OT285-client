import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slides-list',
  templateUrl: './slides-list.component.html',
  styleUrls: ['./slides-list.component.scss']
})
export class SlidesListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  slidesList = [
    {
      title: 'title1',
      image: 'assets/images/LOGO-SOMOS MAS.png',
      order: 'order 1'
    },

    {
      title: 'title2',
      image: 'assets/images/LOGO-SOMOS MAS.png',
      order: 'order 2'
    },

    {
      title: 'title 3',
      image: 'assets/images/LOGO-SOMOS MAS.png',
      order: 'order 3'
    },
    
    
  ];
  columns = ["Title", "Image", "Order", "Editar/Eliminar"];

  deleting = false;
  userFlag = {};


  editListSlide(): void {
    console.log('edit'); 
  }
  deleteListSlide(user: {}): void {
    this.userFlag = user;
    this.deleting = true;

  }
  trueDelete(): void{
    console.log('peticion para eliminar el usuario en el servidor');
    this.deleting = false;
    this.userFlag = {}
  }
  cancel(): void{
    console.log('cancelada la eliminacion del usuario');
    this.deleting = false;
    this.userFlag = {}
  }
  createSlide(): void {
    console.log('redireccion a backoffice/slides/create');
    this.router.navigate(['backoffice/slides/create']);
  }

}
