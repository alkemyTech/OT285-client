import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeFormComponent } from './home-form/home-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    HomeFormComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
