import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationDataComponent } from './organization-data/organization-data.component';
import { OrganizationFormComponent } from './organization-form/organization-form.component';

const routes: Routes = [
  {
    path:'',
    component:OrganizationDataComponent
  },
  {
    path:'create',
    component:OrganizationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
