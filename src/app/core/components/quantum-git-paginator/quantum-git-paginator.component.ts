import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPagination} from "../../interfaces/pagination";

@Component({
  selector: 'app-quantum-git-paginator',
  templateUrl: './quantum-git-paginator.component.html',
  styleUrls: ['./quantum-git-paginator.component.scss']
})
export class QuantumGitPaginatorComponent {
  // Input Variables
  @Input() pagination: IPagination | undefined;

  // Output Variables
  @Output() firstPage: EventEmitter<number>;
  @Output() previousPage: EventEmitter<number>;
  @Output() nextPage: EventEmitter<number>;
  @Output() lastPage: EventEmitter<number>;

  constructor() {
    this.firstPage = new EventEmitter<number>();
    this.previousPage = new EventEmitter<number>();
    this.nextPage = new EventEmitter<number>();
    this.lastPage = new EventEmitter<number>();
  }

  // Method to set the pagination object
  setPagination(pagination: IPagination): void {
    this.pagination = pagination;
  }
}
