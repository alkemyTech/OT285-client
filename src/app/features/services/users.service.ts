import { Injectable } from "@angular/core";
import { PrivateApiServiceService } from "src/app/core/services/privateApiService.service";

interface UsersList {
  success: boolean;
  data: {
    id: number;
    name: string;
    email: string;
    email_verified_at: any;
    password: string;
    role_id: string;
    remember_token: any;
    created_at: string;
    updated_at: any;
    deleted_at: any;
    group_id: any;
    latitude: any;
    longitude: any;
    address: any;
    profile_image: any;
  }[];
  message: string;
}

@Injectable({
  providedIn: "root",
})
export class UsersService {
  route: string = "users";

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
