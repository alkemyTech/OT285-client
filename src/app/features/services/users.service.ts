import { Injectable } from "@angular/core";
import { PrivateApiServiceService } from "src/app/core/services/privateApiService.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  route: string = "users";

  constructor(private privateApi: PrivateApiServiceService) {}

  getAllUsers() {
    this.privateApi.get(this.route).subscribe(
      (data) => {
        return data;
      },
      (err) => {
        return err;
      }
    );
  }

  storeUser(obj: any) {
    this.privateApi.post(this.route, obj).subscribe(
      (data) => {
        return data;
      },
      (err) => {
        return err;
      }
    );
  }

  getUser(id: number) {
    this.privateApi.get(this.route, id).subscribe(
      (data) => {
        return data;
      },
      (err) => {
        return err;
      }
    );
  }

  updateUser(id: number, obj: any) {
    let message: string;
    this.privateApi.put(this.route, id, obj).subscribe(
      (data) => {
        return data;
      },
      (err) => {
        return err;
      }
    );
  }

  deleteUser(id: number) {
    let message: string;
    this.privateApi.delete(this.route, id).subscribe(
      (data) => {
        return data;
      },
      (err) => {
        return err;
      }
    );
  }
}
