import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/core/models/activity';
import { getActivitiesList, State } from '../state/activities.reducer';
import * as ActivitiesActions from '../state/activities.actions';

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

  activities$!: Observable<Activity[]>;

  constructor(private store:Store<State>) { }

  ngOnInit(): void {
    debugger;
    this.activities$ = this.store.select(getActivitiesList);
    this.activities$.subscribe(console.log)
    //dispatch action to load activities
    this.store.dispatch(ActivitiesActions.loadActivities());
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
