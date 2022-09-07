import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlidesRoutingModule } from './slides-routing.module';
import { SlidesFormComponent } from './slides-form/slides-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SlidesListComponent } from './slides-list/slides-list.component';


@NgModule({
  declarations: [
    SlidesFormComponent,
    SlidesListComponent
  ],
  imports: [
    CommonModule,
    SlidesRoutingModule,
    SharedModule
  ]
})
export class SlidesModule { }
