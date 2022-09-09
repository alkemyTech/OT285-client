import { RouterModule } from "@angular/router";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { SharedModule } from "../shared/shared.module";
import { ContactComponent } from "./pages/contact/contact.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { OrganizationDataComponent } from "./pages/organization/organization-data/organization-data.component";
import { MemberFormComponent } from "./pages/members/member-form/member-form.component";
import { DonationComponent } from "./pages/donations/donation/donation.component";
import { ThanksComponent } from "./pages/donations/thanks/thanks.component";
import { UsersListComponent } from "./pages/users/users-list/users-list.component";
import { AboutUsComponent } from "./pages/about/about-us/about-us.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { ActivitiesPageComponent } from './pages/activities/activities-page/activities-page.component';
import { ActivitiesDetailComponent } from './pages/activities/activities-detail/activities-detail.component';
import { SlidesListComponent } from './pages/slides/slides-list/slides-list.component';
import { ActivitiesListComponent } from './pages/activities/activities-list/activities-list.component';
import { HomeFormComponent } from './pages/home/home-form/home-form.component';

import { StoreModule } from '@ngrx/store';
import { authReducer } from './pages/auth/state/auth.reducers';
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./pages/auth/state/auth.effects";
import { usersReducer } from "./pages/users/state/users.reducer";
import { UserEffects } from "./pages/users/state/users.effects";
import { CoreModule } from "../core/core.module";

@NgModule({
  declarations: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    ContactComponent,
    DashboardComponent,
    OrganizationDataComponent,
    MemberFormComponent,
    DonationComponent,
    ThanksComponent,
    UsersListComponent,
    AboutUsComponent,
    UserFormComponent,
    ActivitiesPageComponent,
    ActivitiesDetailComponent,
    SlidesListComponent,
    ActivitiesListComponent,
    HomeFormComponent,
  ],
  exports: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    OrganizationDataComponent,
    RouterModule,
    MemberFormComponent,
    RouterModule,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    CoreModule
  ],
  providers: [CurrencyPipe]
})
export class FeaturesModule {}
