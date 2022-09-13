import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/components/card/card.interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  data:any;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: any){
    this.data = newItem
  }

  textWelcomeHomePage:string ='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, delectus consectetur ut praesentium quas, dicta non dolorem animi nobis distinctio ducimus in eaque aspernatur quasi aliquid omnis odio vero tempora! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, delectus consectetur ut praesentium quas, dicta non dolorem animi nobis distinctio ducimus in eaque aspernatur quasi aliquid omnis odio vero tempora!';

  novedades:Card[] = [
    {
      title:'Novedad 1',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim laboriosam quaerat pariatur accusamus. Nam deleniti sunt quas sit ipsam. Corporis corrupti quo'
    },
    {
      title:'Novedad 2',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim laboriosam quaerat pariatur accusamus. Nam deleniti sunt quas sit ipsam. Corporis corrupti quo'
    },
    {
      title:'Novedad 3',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim laboriosam quaerat pariatur accusamus. Nam deleniti sunt quas sit ipsam. Corporis corrupti quo'
    }
  ];








}
