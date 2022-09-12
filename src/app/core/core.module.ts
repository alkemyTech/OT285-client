import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HttpService } from "./services/http.service";
import { PublicHeaderComponent } from "./components/public-header/public-header.component";
import { MaterialModule } from "../shared/material.module";
import { ProgressLoaderComponent } from "./components/progress-loader/progress-loader.component";
import { LoaderService } from "./components/progress-loader/loader.service";
import { ProgressLoaderInterceptorService } from "./interceptor/progress-loader-interceptor.service";

@NgModule({
  declarations: [PublicHeaderComponent, SidebarComponent, ProgressLoaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    SharedModule,
  ],
  providers: [
    HttpService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProgressLoaderInterceptorService,
      multi: true,
    }
  ],
  exports: [PublicHeaderComponent, ProgressLoaderComponent],
})
export class CoreModule {}
