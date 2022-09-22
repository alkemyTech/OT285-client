import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  @Input()
  opened!: boolean;

  routes!: any;

  constructor(private router: Router) {}

  ngOnInit() {
    //Traigo un todas las rutas
    this.routes = this.router.config;
    //Busco las rutas del backoffice
    console.log('lenght',this.routes.length)
    for (let i = 0; i < this.routes.length; i++) {
      if (this.routes[i].path == "backoffice") {        
        let backofficeRoutes;
        backofficeRoutes = this.routes[i].children;         
        this.routes = backofficeRoutes;        
      }
    }
    this.routes.splice(6,7);
  }
}
