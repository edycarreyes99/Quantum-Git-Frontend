import {Injectable} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {BRANCHES_URL} from "../../../core/constants/api/branch.constants";
import {IBranch} from "../interfaces/branch";
import {CRUD} from "../../../core/http/crud";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BranchesService extends CRUD<IBranch> {
  protected constructor(
    private authService: AuthService,
    protected override http: HttpClient
  ) {
    super(http, BRANCHES_URL);
  }
}
