import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { User } from "src/app/core/models/user";
import { UsersService } from "src/app/features/services/users.service";
import * as userPageActions from "../state/actions/users-page.actions";
import * as userApiActions from "../state/actions/users-api.actions";
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
    this.errorMessage$.subscribe((res)=>{
      console.log(res);
      
    })
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
