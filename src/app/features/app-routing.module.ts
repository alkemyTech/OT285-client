import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";


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
    path: "auth",
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
    path:'backoffice',
    children:[
      {
        path:'',
        loadChildren: () =>
          import("./pages/dashboard/dashboard.module").then((m) => m.DashboardModule),
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
        path: "home",
        loadChildren: () =>
          import("./pages/home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "slides",
        loadChildren: () =>
          import("./pages/slides/slides.module").then((m) => m.SlidesModule),
      },
    ]
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
