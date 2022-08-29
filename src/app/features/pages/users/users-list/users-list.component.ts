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
    {
      name: 'Viviana Perez',
      email: 'viviana.perez28@gmail.com'
    }
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
    console.log('peticion para eliminar el usuario en el servidor');
    this.deleting = false;
    this.userFlag = {}
  }
  cancel(): void{
    console.log('cancelada la eliminacion del usuario');
    this.deleting = false;
    this.userFlag = {}
  }
  create(): void {
    console.log('redireccion a backoffice/users/create');
    //this.router.navigate(['backoffice/users/create']);
  }
  
}
