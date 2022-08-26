import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicApiServiceService {

  constructor(private http:HttpClient) { }

  get<T>(route:string, id?:number): Observable<T>{

    const url = route + (id ? '/'+id : '')//Falta la url base de la api al principio
    return this.http.get<T>(url) 
  }
}
