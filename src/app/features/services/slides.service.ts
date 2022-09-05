import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrivateApiServiceService } from 'src/app/core/services/privateApiService.service';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {

  route: string = 'slides'

  constructor(private privateApiService: PrivateApiServiceService) { }

  getSlide<T>(): Observable<T>{
    return this.privateApiService.get(this.route);
  };
  
  getSlideById<T>(id: number): Observable<T>{
    return this.privateApiService.get(this.route, id);
  };

  createSlide<T>(body:{}): Observable<T>{
    return this.privateApiService.post(this.route, body);
  };

  updateSlide<T>(id: number, body:{}): Observable<T>{
    return this.privateApiService.put(this.route, id, body);
  };

  deleteSlide<T>(id: number): Observable<T>{
    return this.privateApiService.delete(this.route, id);
  };  
}

