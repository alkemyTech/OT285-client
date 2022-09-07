import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { User } from "src/app/core/models/user";
import { UsersService } from "src/app/features/services/users.service";
import * as userActions from "../state/users.actions";
import { getUsersState } from "../state/users.reducer";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent implements OnInit {
  users$!: Observable<User[]>;
  columns = ["name", "email", "accions"];
  deleting = false;
  userFlag = {};
  constructor(
    private router: Router,
    private store: Store<any>,
    private uS: UsersService
  ) {}

  ngOnInit(): void {
    this.users$ = this.store.select(getUsersState);
    this.store.dispatch(userActions.loadUsers());
  }
  edit(): void {
    console.log('edit');
  }
  delete(user: {}): void {
    this.userFlag = user;
    this.deleting = true;

  }
  trueDelete(): void{
    this.deleting = false;
    this.userFlag = {}
  }
  cancel(): void{
    this.deleting = false;
    this.userFlag = {}
  }
  create(): void {
    this.router.navigate(['backoffice/users/create']);
  }
  
}
