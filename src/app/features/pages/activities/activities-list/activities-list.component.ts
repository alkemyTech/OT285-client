import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Activity } from "src/app/core/models/activity";
import {
  getActivitiesList,
  getError,
  State,
} from "../state/activities.reducer";
import * as ActivitiesActions from "../state/activities.actions";

@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.scss"],
})
export class ActivitiesListComponent implements OnInit {
  columns: string[] = ["name", "image", "createdAt", "acciones"];

  activityFlag = {};

  deleteConfirm = false;

  activities$!: Observable<Activity[]>;
  errorMessage$!: Observable<string>;

  loadedTable = false;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    //Get activities
    this.activities$ = this.store.select(getActivitiesList);

    //get Error if exists
    this.errorMessage$ = this.store.select(getError);

    //dispatch action to load activities
    this.store.dispatch(ActivitiesActions.loadActivities());

    this.activities$.subscribe((res) => {
      if (res.length) {
        this.loadedTable = true;
      }
    });
  }
  editActivity(): void {
    console.log("Redigir al router de modificar actividad");
  }
  deleteActivity(activity: {}): void {
    this.activityFlag = activity;
    this.deleteConfirm = true;
  }

  confirmDelete(): void {
    this.deleteConfirm = false;
    this.activityFlag = {};

    console.log("Eliminar actividad");
  }
  cancel(): void {
    this.deleteConfirm = false;
    this.activityFlag = {};
  }
}
