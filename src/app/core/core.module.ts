import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FooterComponent } from "./components/footer/footer.component";
import { HttpService } from "./services/http.service";
import { PublicHeaderComponent } from "./components/public-header/public-header.component";
import { MaterialModule } from "../shared/material.module";
import { ProgressLoaderComponent } from "./components/progress-loader/progress-loader.component";
import { LoaderService } from "./components/progress-loader/loader.service";
import { ProgressLoaderInterceptorService } from "./interceptor/progress-loader-interceptor.service";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    PublicHeaderComponent, 
    SidebarComponent, ProgressLoaderComponent,
    FooterComponent
  ],
  imports: [    
    CommonModule,   
    HttpClientModule,
    MaterialModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    FooterComponent,
    PublicHeaderComponent
  ],
  providers: [HttpService],
})
export class CoreModule {}
