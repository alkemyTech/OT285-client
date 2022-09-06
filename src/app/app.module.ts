import { FeaturesModule } from "./features/features.module";
import { CoreModule } from "./core/core.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MEMBERS_REDUCERS } from "./features/pages/members/memberslist/state/app.state";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    FeaturesModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(MEMBERS_REDUCERS),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
