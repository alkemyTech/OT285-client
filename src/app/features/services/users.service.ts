import { Injectable } from "@angular/core";
import { PrivateApiServiceService } from "src/app/core/services/privateApiService.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  private readonly route: string = "users";

  constructor(private privateApi: PrivateApiServiceService) {}

  getAllUsers(): any {
    return this.privateApi.get(this.route);
  }

  storeUser(obj: any): any {
    return this.privateApi.post(this.route, obj);
  }

  getUser(id: number): any {
    return this.privateApi.get(this.route, id);
  }

  updateUser(id: number, obj: any): any {
    return this.privateApi.put(this.route, id, obj);
  }

  /*
    deleteUser(id: number): any {
    let message: string;
     return this.privateApi.delete(this.route, id)
  }
  */
}
