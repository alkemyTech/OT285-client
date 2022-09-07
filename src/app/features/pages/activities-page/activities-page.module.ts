import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivitiesPageComponent } from "./activities-page.component";
import { ActivitiesPageRoutingModule } from "./activities-page-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { ActivitiesDetailComponent } from "./activities-detail/activities-detail.component";

@NgModule({
  imports: [CommonModule, ActivitiesPageRoutingModule, SharedModule],
  declarations: [ActivitiesPageComponent, ActivitiesDetailComponent],
})
export class ActivitiesPageModule {}
