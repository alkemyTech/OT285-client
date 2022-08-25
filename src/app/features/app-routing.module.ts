import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { OrganizationDataComponent } from "./pages/organization/organization-data/organization-data.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { MemberFormComponent } from "./pages/members/member-form/member-form.component";

const routes: Routes = [
  {
    path: "miembros",
    component: MemberFormComponent,
  },
  {
    path: "registro",
    component: RegisterFormComponent,
  },
  {
    path: "login",
    component: LoginFormComponent,
  },
  {
    path: "actividades",
    component: ActivityFormComponent,
  },
  {
    path: "backoffice/organization",
    component: OrganizationDataComponent,
  },
  {
    path: "categorias",
    component: CategoriesFormComponent,
  },
  {
    path: "backoffice",
    component: DashboardComponent,
  },
  {
    path: "backoffice/Slides",
    component: SlidesFormComponent,
  },
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
