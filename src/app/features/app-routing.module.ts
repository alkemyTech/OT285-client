import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from "@angular/fire/compat/auth-guard"
import { DonationsGuard } from "./services/donations.guard";
import { AdminGuard } from "../core/guards/admin.guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth/registro'])
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);


const routes: Routes = [
  {
    path: "home",
    component: HomepageComponent,
  },
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
    path: "miembros",
    loadChildren: () =>
      import("./pages/members/members.module").then((m) => m.MembersModule),
  },
  {
    path: "donar",
    ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () =>
      import("./pages/donations/donations.module").then(
        (m) => m.DonationsModule
      ),
    // canActivate: [DonationsGuard]
  },
  {
    path: "auth",
    ...canActivate(redirectLoggedInToHome),
    loadChildren: () =>
      import("./pages/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "contacto",
    loadChildren: () =>
      import("./pages/contact/contact.module").then((m) => m.ContactModule),
  },
  {
    path: "news",
    loadChildren: () =>
      import("./pages/news/news.module").then((m) => m.NewsModule),
  },

  {
    path: "backoffice",
    canActivate: [AdminGuard],
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "home",
        loadChildren: () =>
          import("./pages/home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "categories",
        loadChildren: () =>
          import("./pages/categories/categories.module").then(
            (m) => m.CategoriesModule
          ),
      },
      {
        path: "activities",
        loadChildren: () =>
          import("./pages/activities/activities.module").then(
            (m) => m.ActivitiesModule
          ),
      },
      {
        path: "users",
        loadChildren: () =>
          import("./pages/users/users.module").then((m) => m.UsersModule),
      },

      {
        path: "organization",
        loadChildren: () =>
          import("./pages/organization/organization.module").then(
            (m) => m.OrganizationModule
          ),
      },
      {
        path: "slides",
        loadChildren: () =>
          import("./pages/slides/slides.module").then((m) => m.SlidesModule),
      },
    ],
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "home",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
