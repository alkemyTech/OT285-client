import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HttpService } from "./services/http.service";
import { PublicHeaderComponent } from "./components/public-header/public-header.component";
import { MaterialModule } from "../shared/material.module";
import { ProgressLoaderComponent } from "./components/progress-loader/progress-loader.component";
import { LoaderService } from "./components/progress-loader/loader.service";
import { ProgressLoaderInterceptorService } from "./interceptor/progress-loader-interceptor.service";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { LayoutPublicComponent } from "./components/layout-public/layout-public.component";
import { LayoutBackofficeComponent } from "./components/layout-backoffice/layout-backoffice.component";
import { ApiErrorInterceptorInterceptor } from "./interceptor/api-error-interceptor.interceptor";

@NgModule({
  declarations: [
    PublicHeaderComponent,
    SidebarComponent,
    ProgressLoaderComponent,
    FooterComponent,
    HeaderComponent,
    LayoutPublicComponent,
    LayoutBackofficeComponent,
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
    PublicHeaderComponent,
    ProgressLoaderComponent,
    HeaderComponent,
    SidebarComponent,
    LayoutPublicComponent,
    LayoutBackofficeComponent,
  ],
  providers: [
    HttpService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProgressLoaderInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiErrorInterceptorInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
