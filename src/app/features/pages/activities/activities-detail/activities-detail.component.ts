import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities-detail',
  templateUrl: './activities-detail.component.html',
  styleUrls: ['./activities-detail.component.scss']
})
export class ActivitiesDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  TitleParent:string="Aquí sstá el título en minuscula, se debe ver en mayuscula"; //titulo a pasar al componente <app-heading></app-heading>
  ImageParent:string='assets/images/LOGO-SOMOS MAS.png';
  

}
