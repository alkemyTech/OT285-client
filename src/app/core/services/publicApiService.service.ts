import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicApiServiceService {

  apiUrl!: string //Aqui iria la url de la api

  constructor(private http:HttpClient) { }

  get<T>(route:string, id?:number): Observable<T>{

    const url = route + (id ? '/'+id : '')//Falta la url base de la api al principio
    return this.http.get<T>(url) 
  }

  post(postUrl: string, obj: any): Observable<any> {
    return this.http.post(this.apiUrl + postUrl, obj);
  }
}
