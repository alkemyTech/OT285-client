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
import { DonationComponent } from "./pages/donations/donation/donation.component";
import { ThanksComponent } from "./pages/donations/thanks/thanks.component";
import { UsersListComponent } from "./pages/users/users-list/users-list.component";
import { AboutUsComponent } from "./pages/about/about-us/about-us.component";
import { MemberFormComponent } from "./pages/members/member-form/member-form.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { ActivitiesPageComponent } from "./pages/activities-page/activities-page.component";
import { ActivitiesDetailComponent } from "./pages/activities/activities-detail/activities-detail.component";
import { SlidesListComponent } from "./pages/slides/slides-list/slides-list.component";
import { ActivitiesListComponent } from "./pages/activities/activities-list/activities-list.component";
import { HomeFormComponent } from "./pages/home/home-form/home-form.component";

const routes: Routes = [
  {
    path: "nosotros",
    loadChildren: () =>
      import("./pages/about/about.module").then((m) => m.AboutModule),
  },
  {
    path: "actividades",
    loadChildren: () =>
      import("./pages/activities-page/activities-page.module").then(
        (m) => m.ActivitiesPageModule
      ),
  },
  {
    path: "usuarios",
    loadChildren: () =>
      import("./pages/users/users.module").then((m) => m.UsersModule),
  },
  {
    path: "miembros",
    loadChildren: () =>
      import("./pages/members/members.module").then((m) => m.MembersModule),
  },
  {
    path: "donar",
    loadChildren: () =>
      import("./pages/donations/donations.module").then(
        (m) => m.DonationsModule
      ),
  },
  {
    path: "categorias",
    loadChildren: () =>
      import("./pages/categories/categories.module").then(
        (m) => m.CategoriesModule
      ),
  },
  {
    path: "registro",
    loadChildren: () =>
      import("./pages/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "backoffice/home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "backoffice/slides",
    loadChildren: () =>
      import("./pages/slides/slides.module").then((m) => m.SlidesModule),
  },
  {
    path: "backoffice/organization",
    loadChildren: () =>
      import("./pages/organization/organization.module").then(
        (m) => m.OrganizationModule
      ),
  },
  {
    path: "backoffice/activities",
    loadChildren: () =>
      import("./pages/activities/activities.module").then(
        (m) => m.ActivitiesModule
      ),
  },
  // {
  //   path: "usuarios",
  //   component: UserFormComponent,
  // },
  // {
  //   path: "miembros",
  //   component: MemberFormComponent,
  // },
  // {
  //   path: "nosotros",
  //   component: AboutUsComponent,
  // },
  // {
  //   path: "gracias",
  //   component: ThanksComponent,
  // },
  // {
  //   path: "donar",
  //   component: DonationComponent,
  // },
  // {
  //   path: "registro",
  //   component: RegisterFormComponent,
  // },
  // {
  //   path: "login",
  //   component: LoginFormComponent,
  // },
  // {
  //  path: "actividades",
  //  component: ActivitiesPageComponent,
  // },
  // {
  //   path:'backoffice/activities',
  //   component:ActivitiesListComponent
  // },
  // {
  //   path:'backoffice/activities/create',
  //   component:ActivityFormComponent
  // },
  // {
  //   path: "backoffice/home",
  //   component: HomeFormComponent,
  // },
  // {
  //   path: "backoffice/users",
  //   component: UsersListComponent,
  // },
  // {
  //   path: "backoffice/organization",
  //   component: OrganizationDataComponent,
  // },
  // {
  //   path: "categorias",
  //   component: CategoriesFormComponent,
  // },
  // {
  //   path: "backoffice",
  //   component: DashboardComponent,
  // },
  // {
  //   path: "backoffice/slides/create",
  //   component: SlidesFormComponent,
  // },
  // {
  //   path: "backoffice/slides",
  //   component: SlidesListComponent,
  // },
  // {
  //   path: "actividades/:id",
  //   component:ActivitiesDetailComponent,
  // },

  // {
  //   path: "",
  //   redirectTo: "actividades",
  //   pathMatch: "full",
  // },
  // {
  //   path: "**",
  //   redirectTo: "actividades",
  //   pathMatch: "full",
  // }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
