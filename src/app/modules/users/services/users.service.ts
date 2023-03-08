import {Injectable} from '@angular/core';
import {CRUD} from "../../../core/http/crud";
import {IUser} from "../interfaces/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends CRUD<IUser, IUser[]> {

  constructor(
    protected override http: HttpClient
  ) {
    super(http, '');
  }
}
