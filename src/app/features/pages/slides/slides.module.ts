import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlidesRoutingModule } from './slides-routing.module';
import { SlidesFormComponent } from './slides-form/slides-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SlidesListComponent } from './slides-list/slides-list.component';
import { StoreModule } from '@ngrx/store';
import { slidesReducer } from './state/slides.reducer';
import { SlidesEffects } from './state/slides.effects';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    SlidesFormComponent,
    SlidesListComponent
  ],
  imports: [
    CommonModule,
    SlidesRoutingModule,
    SharedModule,
    StoreModule.forFeature('slides',slidesReducer),
    EffectsModule.forFeature([SlidesEffects])
  ]
})
export class SlidesModule { }
