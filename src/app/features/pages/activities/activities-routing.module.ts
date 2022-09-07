import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesDetailComponent } from '../activities-page/activities-detail/activities-detail.component';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';

const routes: Routes = [
  {
    path:'',
    component:ActivitiesListComponent
  },
  {
    path:'create',
    component:ActivityFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
