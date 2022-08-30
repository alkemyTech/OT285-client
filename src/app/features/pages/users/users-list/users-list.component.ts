import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent implements OnInit {
  users = [
    {
      name: 'Carolina Laborde',
      email: 'carolina.laborde@gmail.com',
    },
    {
      name: 'Gastón Machado',
      email: 'gastonmachado056@gmail.com',
    },
    {
      name: 'Nahuel Barreiro',
      email: 'nahuelbarreiro@gmail.com',
    },
    {
      name: 'Lucio Cocuccio',
      email: 'lucio.cocuccio@i2t-sa.com.ar',
    },
    {
      name: 'Diego Otranto',
      email: 'diegui98@live.com.ar',
    },
    {
      name: 'Antonio Lopez',
      email: 'anjojalo1@gmail.com',
    },
  ];
  columns = ["name", "email", "accions"];
  deleting = false;
  userFlag = {};
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

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
