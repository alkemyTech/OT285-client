import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonationsRoutingModule } from './donations-routing.module';
import { DonationComponent } from './donation/donation.component';
import { ThanksComponent } from './thanks/thanks.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DonationComponent,
    ThanksComponent,

  ],
  imports: [
    CommonModule,
    DonationsRoutingModule,
    SharedModule
  ]
})
export class DonationsModule { }
