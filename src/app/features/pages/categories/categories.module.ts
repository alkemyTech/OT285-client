import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesListComponent } from './categories-list/categories-list.component';


@NgModule({
  declarations: [
    CategoriesFormComponent,
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule
  ]
})
export class CategoriesModule { }
