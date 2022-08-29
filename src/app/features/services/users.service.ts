import { Injectable } from "@angular/core";
import { PrivateApiServiceService } from "src/app/core/services/privateApiService.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  route: string = "users";

  constructor(private privateApi: PrivateApiServiceService) {}

  getAllUsers() {
    let usersList: [];
    let message: string;
    this.privateApi.get(this.route).subscribe(
      (data) => {
        usersList = data.data;
        return usersList;
      },
      (err) => {
        message = err.message;
        return message;
      }
    );
  }

  storeUser(obj: any) {
    let message: string;
    this.privateApi.post(this.route, obj).subscribe(
      (data) => {
        message = data.message;
        return message;
      },
      (err) => {
        message = err.message;
        return message;
      }
    );
  }

  getUser(id: number) {
    let user: {};
    let message: string;
    this.privateApi.get(this.route, id).subscribe(
      (data) => {
        user = data.data;
        return user;
      },
      (err) => {
        message = err.message;
        return message;
      }
    );
  }

  updateUser(id: number, obj: any) {
    let message: string;
    this.privateApi.put(this.route, id, obj).subscribe(
      (data) => {
        message = data.message;
        return message;
      },
      (err) => {
        message = err.message;
        return message;
      }
    );
  }

  deleteUser(id: number) {
    let message: string;
    this.privateApi.delete(this.route, id).subscribe(
      (data) => {
        message = data.data;
        return message;
      },
      (err) => {
        message = err.message;
        return message;
      }
    );
  }
}
