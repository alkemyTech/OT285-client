import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models/category';
import * as categoriesPageActions from "../state/actions/categories-page.actions";
import { getError, getCategories } from "../state/categories.reducer";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  columns = ["name", "createdAt", "accions"];
  deleting = false;
  categoryFlag = {};
  categories$!: Observable<Category[]>;
  errorMessage$!: Observable<string>;

  constructor(private router: Router, private store: Store<any>) { }

  ngOnInit(): void {
    this.categories$ = this.store.select(getCategories);
    this.errorMessage$ = this.store.select(getError);
    this.store.dispatch(categoriesPageActions.loadCategories());
  }
  edit(): void {
    console.log('edit');
  }
  delete(category: {}): void {
    this.categoryFlag = category;
    this.deleting = true;

  }
  trueDelete(): void{
    this.deleting = false;
    this.categoryFlag = {}
  }
  cancel(): void{
    this.deleting = false;
    this.categoryFlag = {}
  }
  redirectToCreateForm(): void {
    this.router.navigate(['backoffice/categories/create']);
  }

}
