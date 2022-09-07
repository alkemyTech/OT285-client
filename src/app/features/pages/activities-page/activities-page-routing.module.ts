import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivitiesDetailComponent } from "./activities-detail/activities-detail.component";
import { ActivitiesPageComponent } from "./activities-page.component";

const routes: Routes = [
  {
    path:'',
    component:ActivitiesPageComponent
  },
  {
    path:':id',
    component:ActivitiesDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitiesPageRoutingModule {}
