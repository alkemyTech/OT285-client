import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryResponse } from 'src/app/core/models/category';
import { PrivateApiServiceService } from 'src/app/core/services/privateApiService.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  route = 'categories'

  constructor(private privateApiService: PrivateApiServiceService) { }

  getAllCategories(): Observable<CategoryResponse> {
    return this.privateApiService.get(this.route);
  }

  getCategory(data: number): Observable<CategoryResponse> {
    return this.privateApiService.get(this.route, data);
  }

  createCategory(data: any): Observable<CategoryResponse> {
    return this.privateApiService.post(this.route, data);
  }

  updateCategory(id: number, data: any): Observable<CategoryResponse> {
    return this.privateApiService.put(this.route, id, data);
  }

  deleteCategory(id: number): Observable<CategoryResponse>{
    return this.privateApiService.delete(this.route, id)
  }

}
