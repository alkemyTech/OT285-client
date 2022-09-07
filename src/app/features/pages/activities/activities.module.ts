import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { activitiesReducer } from './state/activities.reducer';
import { ActivitiesEffects } from './state/activities.effects';


@NgModule({
  declarations: [
    ActivitiesListComponent,
    ActivityFormComponent
  ],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    SharedModule,  
    StoreModule.forFeature('activities',activitiesReducer),
    EffectsModule.forFeature([ActivitiesEffects])
  ]
})
export class ActivitiesModule { }
