import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { TestimonialFormComponent } from './testimonial-form/testimonial-form.component';


@NgModule({
  declarations: [
    TestimonialFormComponent,

  ],
  imports: [
    CommonModule,
    TestimonialsRoutingModule
  ]
})
export class TestimonialsModule { }
