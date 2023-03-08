import {Injectable} from '@angular/core';
import {IRepo} from "../interfaces/repo";
import {REPOS_URL} from "../../../core/constants/api/repo.constants";
import {CRUD} from "../../../core/http/crud";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReposService extends CRUD<IRepo, IRepo[]> {
  constructor(
    protected override http: HttpClient,
  ) {
    super(http, REPOS_URL);
  }
}
