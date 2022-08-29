import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/components/card/card.interface';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.scss']
})
export class ActivitiesPageComponent implements OnInit {


  actividades:Card[] = [
    {
      title:'Actividad 1',
      description:'Esta es la actividad 1'
    },
   
    {
      title:'Actividad 2',
      description:'Esta es la actividad 2'
    },
   
    {
      title:'Actividad 3',
      description:'Esta es la actividad 3'
    },
   
    {
      title:'Actividad 4',
      description:'Esta es la actividad 4'
    },
   
   
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
