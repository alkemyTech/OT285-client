import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { categoriesReducer } from './state/categories.reducer';
import { CategoriesEffects } from './state/categories.effects';


@NgModule({
  declarations: [
    CategoriesFormComponent,
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
    StoreModule.forFeature('categories', categoriesReducer),
    EffectsModule.forFeature([CategoriesEffects])
  ]
})
export class CategoriesModule { }
