import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrivateApiServiceService } from './privateApiService.service';

@Injectable({
  providedIn: 'root'
})
export class PublicApiServiceService {

  apiUrl = '';
  constructor(
    private http:HttpClient,
    private privateApiService: PrivateApiServiceService
    ) { }

  get<T>(route:string, id?:number): Observable<T>{

    const url = route + (id ? '/'+id : '')//Falta la url base de la api al principio
    return this.http.get<T>(url) 
  }

  patch(route: string, id: number, data: {}): void{
    const headers = this.privateApiService.getHeaders();
    if(headers){
      this.http.patch(this.apiUrl, data, {headers: headers})
    }
  }
}
