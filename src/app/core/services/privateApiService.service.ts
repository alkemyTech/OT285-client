import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrivateApiServiceService {

  constructor() { }

  getHeaders(): Headers | null {
    const token = localStorage.getItem('token')
    if(token){
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
      return headers
    }
    return null
  }
}
