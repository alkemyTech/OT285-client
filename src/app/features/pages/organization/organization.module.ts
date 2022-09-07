import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationDataComponent } from './organization-data/organization-data.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrganizationFormComponent } from './organization-form/organization-form.component';


@NgModule({
  declarations: [
    OrganizationDataComponent,
    OrganizationFormComponent

  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    SharedModule
  ]
})
export class OrganizationModule { }
