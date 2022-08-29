import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivateApiServiceService {
  
  apiUrl: string = '.../';

  constructor(private http: HttpClient) { }

  getHeaders(): HttpHeaders | null {
    const token = localStorage.getItem('token')
    if(token){
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
      return headers;
    }
    return null
  }

  get<T>(route: string, id: number | null): Observable<T> {
    const headers = this.getHeaders();
    const url = this.apiUrl + route + (id ? '/' + id : '');
    let apiCall: Observable<T>;
    (headers ? apiCall = this.http.get<T>( url, { headers: headers }) : apiCall = this.http.get<T>(url));    
    return apiCall;
  }

  patch<T>(route: string, id: number, data: {}): Observable<T> | null {
    const headers = this.getHeaders();
    if (headers) {
      const url = this.apiUrl + "/" + route + (id ? "/" + id : "");
      return this.http.patch<T>(url, data, { headers: headers });
    }
    return null;
  }
}
