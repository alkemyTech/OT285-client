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
    for (let i = 0; i < this.routes.length; i++) {
      if (this.routes[i].path == "backoffice") {
        this.routes = this.routes[i].children;
      }
    }
    //Saco la ruta "backoffice" ya que su path vacio genera conflicto y lo hardcodeo ya que siempre sera constante
    this.routes.splice(0, 1);
  }
}
