import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class PrivateApiServiceService {
  apiUrl: string = environment.apiUrl;

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

  patch<T>(route: string, data: {}, id?: number): Observable<T> | null {
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

  put<T>(route: string, id: number, obj: {}): Observable<T> {
    const headers: HttpHeaders | null = this.getHeaders();
    let url: string = this.apiUrl + route + "/" + id;
    let apiCall: Observable<T>;

    headers 
      ? apiCall = this.http.put<T>(url, obj, { headers: headers })
      : apiCall = this.http.put<T>(url, obj)

    return apiCall;
  }
    
  
  delete<T>(route: string, id: number): Observable<T> {
    const headers: HttpHeaders | null = this.getHeaders();
    let url: string = this.apiUrl + route + "/" + id;
    let apiCall: Observable<T>;

    headers
      ? apiCall = this.http.delete<T>(url, {headers: headers})
      : apiCall = this.http.delete<T>(url);

    return apiCall;
  }
}
