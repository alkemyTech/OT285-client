import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlidesFormComponent } from './slides-form/slides-form.component';
import { SlidesListComponent } from './slides-list/slides-list.component';

const routes: Routes = [
  {
    path:'',
    component:SlidesListComponent
  },
  {
    path:'create',
    component:SlidesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlidesRoutingModule { }
