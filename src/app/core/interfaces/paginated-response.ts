import {IPagination} from "./pagination";

export interface IPaginatedResponse<T> extends IPagination {
  data: T;
}
