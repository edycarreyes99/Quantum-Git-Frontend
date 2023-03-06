import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPagination} from "../../interfaces/pagination";

@Component({
  selector: 'app-quantum-git-paginator',
  templateUrl: './quantum-git-paginator.component.html',
  styleUrls: ['./quantum-git-paginator.component.scss']
})
export class QuantumGitPaginatorComponent {
  // Input Pagination String
  @Input() paginationString: string = '';

  // Output Variables
  @Output() firstPage: EventEmitter<number>;
  @Output() previousPage: EventEmitter<number>;
  @Output() nextPage: EventEmitter<number>;
  @Output() lastPage: EventEmitter<number>;

  // Component variables
  pagination: IPagination | undefined;

  constructor() {
    this.firstPage = new EventEmitter<number>();
    this.previousPage = new EventEmitter<number>();
    this.nextPage = new EventEmitter<number>();
    this.lastPage = new EventEmitter<number>();
  }

  // Method to parse the pagination string to objects
  parsePaginationString(paginationString?: string | undefined): IPagination {
    if (!!paginationString)
      this.paginationString = paginationString;

    const paginationArray = this.paginationString.match(/<([^;]*)>; rel="([^;]*)"/g);
    const pagination: IPagination = {
      first: null,
      previous: null,
      next: null,
      last: null
    };

    paginationArray?.forEach((link: string) => {
      const urlParams = new URLSearchParams(link.match(/<([^;]*)>/g)?.at(0));
      const page = parseInt(urlParams.get('page') ?? '0', 10);
      if (link.includes('prev')) {
        pagination.previous = page;
      } else if (link.includes('first')) {
        pagination.first = page;
      } else if (link.includes('next')) {
        pagination.next = page;
      } else if (link.includes('last')) {
        pagination.last = page;
      }
    });

    this.pagination = pagination;

    return pagination;
  }

}
