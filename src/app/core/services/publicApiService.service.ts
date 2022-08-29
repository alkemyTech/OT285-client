import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PrivateApiServiceService } from "./privateApiService.service";

@Injectable({
  providedIn: "root",
})
export class PublicApiServiceService {
  apiUrl = "";
  constructor(
    private http: HttpClient
  ) {}

  get<T>(route: string, id?: number): Observable<T> {
    const url = route + (id ? "/" + id : ""); //Falta la url base de la api al principio
    return this.http.get<T>(url);
  }

  post<T>(url: string, obj: any): Observable<T> {
    return this.http.post<T>(this.apiUrl + url, obj);
  }
}
