import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  columns = ["name", "createdAt", "accions"];
  deleting = false;
  categoryFlag = {};

  categories = [{
    id: 0,
    name: "string",
    description: "string",
    image: "string",
    parent_category_id: 0,
    created_at: "2022-09-10T06:34:25.038Z",
    updated_at: "2022-09-10T06:34:25.038Z",
    deleted_at: "2022-09-10T06:34:25.038Z"
  }];

  constructor(private router: Router) { }

  ngOnInit(): void {
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
