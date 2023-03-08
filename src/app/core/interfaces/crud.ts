import {Observable} from "rxjs";
import {IPaginationParams} from "./pagination-params";

export interface ICRUD<M> {
  index(params?: any, paginationParams?: IPaginationParams): Observable<M>;
}
