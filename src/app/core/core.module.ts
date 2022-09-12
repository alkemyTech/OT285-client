import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HttpService } from "./services/http.service";
import { PublicHeaderComponent } from "./components/public-header/public-header.component";
import { MaterialModule } from "../shared/material.module";

@NgModule({
  declarations: [PublicHeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    SharedModule,
  ],
  providers: [HttpService],
  exports: [PublicHeaderComponent],
})
export class CoreModule {}
