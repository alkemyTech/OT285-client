import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberslistComponent } from './members-list/members-list.component';

const routes: Routes = [
  {
    path:'',
    component:MemberslistComponent
  },
  {
    path:'create',
    component:MemberFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
