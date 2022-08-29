import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrivateApiServiceService {

  apiUrl!: string //Aca iria la url de la api

  constructor(private http:HttpClient) { }

  getHeaders(): HttpHeaders | null {
    const token = localStorage.getItem('token')
    if(token){
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
      return headers
    }
    return null
  }

  put<T>(route: string, id: number, obj: any) {

    const headers = this.getHeaders()
    if (headers) {
      let url = this.apiUrl + route + "/" + id
      return this.http.put<T>( url, obj, { headers: headers } )
    }
    return null
  }
}
