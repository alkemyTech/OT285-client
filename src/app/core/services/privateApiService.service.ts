import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrivateApiServiceService {

  constructor() { }

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
}
