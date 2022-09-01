import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss']
})
export class ActivitiesListComponent implements OnInit {

  activities = [
    {
      name:'actividad 01',
      image:'http://ongapi.alkemy.org/storage/yzmx4jk9Wy.png',
      createdAt:'2022-07-26T01:04:22.000000Z'
    },
    {
      name:'actividad 02',
      image:'http://ongapi.alkemy.org/storage/yzmx4jk9Wy.png',
      createdAt:'2022-07-26T01:04:22.000000Z'
    },
    {
      name:'actividad 03',
      image:'http://ongapi.alkemy.org/storage/yzmx4jk9Wy.png',
      createdAt:'2022-07-26T01:04:22.000000Z'
    },
    {
      name:'actividad 04',
      image:'http://ongapi.alkemy.org/storage/yzmx4jk9Wy.png',
      createdAt:'2022-07-26T01:04:22.000000Z'
    },
    {
      name:'actividad 05',
      image:'http://ongapi.alkemy.org/storage/yzmx4jk9Wy.png',
      createdAt:'2022-07-26T01:04:22.000000Z'
    },
    {
      name:'actividad 06',
      image:'http://ongapi.alkemy.org/storage/yzmx4jk9Wy.png',
      createdAt:'2022-07-26T01:04:22.000000Z'
    }
  ]

  columns: string[] = ["name", "image", "createdAt", "acciones"];

  activityFlag = {};

  deleteConfirm = false;
  constructor() { }

  ngOnInit(): void {
  }
  editActivity(): void {
    console.log('Redigir al router de modificar actividad'); 
  }
  deleteActivity(activity: {}): void {
    this.activityFlag = activity;
    this.deleteConfirm = true;
  }

  confirmDelete(): void{
    this.deleteConfirm = false;
    this.activityFlag = {}

    console.log('Eliminar actividad')
  }
  cancel(): void{
    this.deleteConfirm = false;
    this.activityFlag = {}
  }

}
