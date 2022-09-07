import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivitiesPageComponent } from "./activities-page.component";
import { ActivitiesPageRoutingModule } from "./activities-page-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [CommonModule, ActivitiesPageRoutingModule, SharedModule],
  declarations: [ActivitiesPageComponent],
})
export class ActivitiesPageModule {}
