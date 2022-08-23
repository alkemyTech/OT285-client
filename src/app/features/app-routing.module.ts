import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { OrganizationFormComponent } from "./pages/organization/organization-form/organization-form.component";

const routes: Routes = [
  { 
    path: "actividades", 
    component: ActivityFormComponent 
  },
  { 
    path: "categorias", 
    component: CategoriesFormComponent 
  },
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
  },
  { 
    path: "novedades", 
    component: NewsFormComponent
  },
  { 
    path: "organizacion", 
    component: OrganizationFormComponent
  },

];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
