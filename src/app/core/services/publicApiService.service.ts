import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class PublicApiServiceService {

  apiUrl!: string //Aqui iria la url de la api

  constructor(private http:HttpClient) { }

  get<T>(route:string, id?:number): Observable<T>{

  patch(route: string, id: number, data: {}): void {
    const headers = this.privateApiService.getHeaders();
    if (headers) {
      const url = this.apiUrl + "/" + route + (id ? "/" + id : "");
      this.http.patch(url, data, { headers: headers });
    }
  }

  post<T>(url: string, obj: any): Observable<T> {
    return this.http.post<T>(this.apiUrl + url, obj);
  }
}
