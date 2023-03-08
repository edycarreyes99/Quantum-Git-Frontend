import {Injectable} from '@angular/core';
import {CRUD} from "../../../core/http/crud";
import {IUser} from "../interfaces/user";
import {HttpClient} from "@angular/common/http";
import {USERS_URL} from "../../../core/constants/api/user.constants";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends CRUD<IUser, IUser[]> {

  constructor(
    protected override http: HttpClient
  ) {
    super(http, USERS_URL);
  }
}
