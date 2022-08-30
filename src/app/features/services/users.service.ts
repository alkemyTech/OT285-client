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

  getAllUsers(
    name?: string,
    role?: string,
    skip?: number,
    limit?: number
  ): any {
    this.privateApi.get(this.route).subscribe(
      (data) => {
        //Lista Completa
        let usersList: UsersList = data as UsersList;
        //Busqueda por nombre
        if (name) {
          let usersListByName = [];
          for (let i = 0; i < usersList.data.length; i++) {
            if (usersList.data[i].name.includes(name)) {
              usersListByName.push(usersList.data[i]);
            }
          }
          usersList.data = usersListByName;
        }
        //Busqueda por Rol
        if (role) {
          let usersListByRole = [];
          for (let i = 0; i < usersList.data.length; i++) {
            if (usersList.data[i].role_id.includes(role)) {
              usersListByRole.push(usersList.data[i]);
            }
          }
          usersList.data = usersListByRole;
        }
        //Busqueda con Skip
        if (skip) {
          let usersListWithSkip = [];
          usersListWithSkip = usersList.data.slice(skip);
          usersList.data = usersListWithSkip;
        }
        //Busqueda con Limit
        if (limit) {
          let usersListWithLimit = [];
          usersListWithLimit = usersList.data.slice(0, limit);
          usersList.data = usersListWithLimit;
        }
        //Devuelve la lista modificada o no modificada
        return usersList;
      },
      (err) => {
        return err;
      }
    );
  }

  storeUser(obj: any): any {
    this.privateApi.post(this.route, obj).subscribe(
      (data) => {
        return data;
      },
      (err) => {
        return err;
      }
    );
  }

  getUser(id: number): any {
    this.privateApi.get(this.route, id).subscribe(
      (data) => {
        return data;
      },
      (err) => {
        return err;
      }
    );
  }

  updateUser(id: number, obj: any): any {
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

  deleteUser(id: number): any {
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
