import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { MemberFormComponent } from "./pages/members/member-form/member-form.component";

const routes: Routes = [
  {
    path: "user",
    component: UserFormComponent,
    pathMatch: "full"
  },
  {
    path: "backoffice/members/edit",
    component: MemberFormComponent,
    pathMatch: "full"
  },
  { 
    path: "actividades", 
    component: ActivityFormComponent },
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "actividades",
    pathMatch: "full",
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
