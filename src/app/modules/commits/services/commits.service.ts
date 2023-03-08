import {Injectable} from '@angular/core';
import {COMMITS_URL} from "../../../core/constants/api/commits.constants";
import {ICommit} from "../interfaces/commit";
import {CRUD} from "../../../core/http/crud";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommitsService extends CRUD<ICommit, ICommit[]> {
  constructor(
    protected override http: HttpClient
  ) {
    super(http, COMMITS_URL);
  }
}
