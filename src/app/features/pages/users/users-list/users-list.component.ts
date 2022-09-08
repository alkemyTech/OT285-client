import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { User } from "src/app/core/models/user";
import * as userPageActions from "../state/actions/users-page.actions";
import { getError, getUsers } from "../state/users.reducer";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent implements OnInit {
  users$!: Observable<User[]>;
  errorMessage$!: Observable<string>;
  columns = ["name", "email", "accions"];
  deleting = false;
  userFlag = {};
  constructor(
    private router: Router,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.users$ = this.store.select(getUsers);
    this.errorMessage$ = this.store.select(getError);
    this.store.dispatch(userPageActions.loadUsers());
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
