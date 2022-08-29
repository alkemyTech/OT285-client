import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivateApiServiceService {
  
  apiUrl: string = '.../'; //COMPLETAR

  constructor(private http: HttpClient) { }

  getHeaders(): HttpHeaders | null { //Cambio Headers por HttpHeaders
    const token = localStorage.getItem('token')
    if(token){
      const headers = new HttpHeaders({ //Cambio Headers por HttpHeaders
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
      return headers;
    }
    return null
  }

  get<T>(route: string, id: number | null): Observable<T> {
    const headers = this.getHeaders();
    let url = this.apiUrl + route + (id ? '/' + id : '');
    let apiCall: Observable<T>;
    (headers ? apiCall = this.http.get<T>( url, { headers: headers }) : apiCall = this.http.get<T>(url));    
    return apiCall;
  }
}
