import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MemberFormComponent } from './member-form/member-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MembersReducer } from './state/members.reducers';
import { MembersEffects } from './state/members.effects';
import { MemberslistComponent } from './members-list/members-list.component';


@NgModule({
  declarations: [
    MemberFormComponent,
    MemberslistComponent

  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    SharedModule,
    StoreModule.forFeature('members',MembersReducer),
    EffectsModule.forFeature([MembersEffects])
  ]
})
export class MembersModule { }
