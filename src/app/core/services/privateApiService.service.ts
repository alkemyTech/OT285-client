import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PrivateApiServiceService {
  apiUrl: string = ".../";

  constructor(private http: HttpClient) {}

  getHeaders(): HttpHeaders | null {
    const token = localStorage.getItem("token");
    if (token) {
      const headers = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      });
      return headers;
    }
    return null;
  }

  get<T>(route: string, id?: number): Observable<T> {
    const headers: HttpHeaders | null = this.getHeaders();
    const url: string = this.apiUrl + route + (id ? "/" + id : "");

    let apiCall: Observable<T>;
    headers
      ? (apiCall = this.http.get<T>(url, { headers: headers }))
      : (apiCall = this.http.get<T>(url));

    return apiCall;
  }

  patch<T>(route: string, data: {}, id?: string): Observable<T> | null {
    const headers: HttpHeaders | null = this.getHeaders();
    const url: string = this.apiUrl + "/" + route + (id ? "/" + id : "");

    let apiCall: Observable<T>;
    headers
      ? (apiCall = this.http.patch<T>(url, data, { headers: headers }))
      : (apiCall = this.http.patch<T>(url, data));

    return apiCall;
  }

  post<T>(route: string, body: {}): Observable<T> {
    const headers: HttpHeaders | null = this.getHeaders();
    const url: string = this.apiUrl + route;

    let apiCall: Observable<T>;
    headers
      ? (apiCall = this.http.post<T>(url, body, { headers: headers }))
      : (apiCall = this.http.post<T>(url, body));

    return apiCall;
  }

  put<T>(route: string, id: number, obj: any): Observable<T> {
    const headers = this.getHeaders();
    let url = this.apiUrl + route + "/" + id;
    if (headers) {
      return this.http.put<T>(url, obj, { headers: headers });
    }
    return this.http.put<T>(url, obj);
  }
  
  delete<T>(route: string, id: number): Observable<T> {
    const headers = this.getHeaders();
    let url = this.apiUrl + route + "/" + id;
      if(headers){
        return this.http.delete<T>(url, {headers: headers});
        }else{
      return this.http.delete<T>(url);
      }
  }
}
