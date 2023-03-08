import {Observable} from "rxjs";
import {IPaginationParams} from "./pagination-params";

export interface ICRUD<S, M> {
  index(params?: any, paginationParams?: IPaginationParams): Observable<M>;

  show(id?: string | number, params?: any):Observable<S>;
}
