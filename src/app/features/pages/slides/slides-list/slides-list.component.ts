import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { getError, getSlides, State } from "../state/slides.reducer";
import * as SlidesActions from "../state/slides.actions";
import { Slide } from "src/app/core/models/slide";
import { Observable } from "rxjs";

@Component({
  selector: "app-slides-list",
  templateUrl: "./slides-list.component.html",
  styleUrls: ["./slides-list.component.scss"],
})
export class SlidesListComponent implements OnInit {
  constructor(private router: Router, private store: Store<State>) {}

  ngOnInit(): void {
    this.slidesList$ = this.store.select(getSlides);
    this.errorMessage$ = this.store.select(getError);
    this.store.dispatch(SlidesActions.loadSlides());
  }

  errorMessage$!: Observable<string>;
  slidesList$!: Observable<Slide[]>;

  columns = ["Title", "Image", "Order", "Editar/Eliminar"];

  deleting = false;
  userFlag = {};

  editListSlide(): void {
    console.log("edit");
  }
  deleteListSlide(user: {}): void {
    this.userFlag = user;
    this.deleting = true;
  }
  trueDelete(): void {
    this.deleting = false;
    this.userFlag = {};
  }
  cancel(): void {
    this.deleting = false;
    this.userFlag = {};
  }
  goToCreateSlide(): void {
    this.router.navigate(["backoffice/slides/create"]);
  }
}
