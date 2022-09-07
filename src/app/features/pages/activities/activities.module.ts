import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesDetailComponent } from './activities-detail/activities-detail.component';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ActivitiesDetailComponent,
    ActivitiesListComponent,
    ActivityFormComponent
  ],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    SharedModule
  ]
})
export class ActivitiesModule { }
