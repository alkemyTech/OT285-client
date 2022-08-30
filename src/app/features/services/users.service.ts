import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PrivateApiServiceService } from "src/app/core/services/privateApiService.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  private readonly route: string = "users";

  constructor(private privateApi: PrivateApiServiceService) {}

  getAllUsers(): Observable<any> {
    return this.privateApi.get(this.route);
  }

  saveUser(obj: any): Observable<any> {
    return this.privateApi.post(this.route, obj);
  }

  getUser(id: number): Observable<any> {
    return this.privateApi.get(this.route, id);
  }

  updateUser(id: number, obj: any): Observable<any> {
    return this.privateApi.put(this.route, id, obj);
  }

  /*
    deleteUser(id: number): Observable<any> {
    let message: string;
     return this.privateApi.delete(this.route, id)
  }
  */
}
