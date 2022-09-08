import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { UserFormComponent } from "./user-form/user-form.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { SharedModule } from "src/app/shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { usersReducer } from "./state/users.reducer";
import { EffectsModule } from "@ngrx/effects";
import { UsersEffects } from "./state/users.effects";

@NgModule({
  declarations: [UsersListComponent, UserFormComponent],
  imports: [
    CommonModule, 
    UsersRoutingModule, 
    SharedModule,
    StoreModule.forFeature('users',usersReducer),
    EffectsModule.forFeature([UsersEffects])
  ],
  exports: [UsersListComponent, UserFormComponent],
})
export class UsersModule {}
