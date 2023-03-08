import {ICRUD} from "../interfaces/crud";
import {IPaginationParams} from "../interfaces/pagination-params";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IPaginatedResponse} from "../interfaces/paginated-response";

export abstract class CRUD<S, M> implements ICRUD<S, IPaginatedResponse<M>> {
  protected constructor(
    protected http: HttpClient,
    private url: string
  ) {
  }

  index(params?: any, paginationParams?: IPaginationParams): Observable<IPaginatedResponse<M>> {
    return this.http.get<IPaginatedResponse<M>>(`${this.url}`, {
      params: {
        ...params,
        ...paginationParams
      }
    })
  }

  show(id?: string | number, params?: any, additionalURL?: string): Observable<S> {
    return this.http.get<S>(`${this.url}${id ? `/${id}` : ''}${additionalURL ? `/${additionalURL}` : ''}`, {
      params: {
        ...params
      }
    });
  }

}
