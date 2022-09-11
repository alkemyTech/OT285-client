import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HttpService } from "./services/http.service";

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, HttpClientModule, SharedModule, RouterModule],
  providers: [HttpService],
})
export class CoreModule {}
