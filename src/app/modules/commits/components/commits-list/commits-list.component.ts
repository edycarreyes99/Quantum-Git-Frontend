import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IBranch} from "../../../branches/interfaces/branch";

@Component({
  selector: 'app-commits-list',
  templateUrl: './commits-list.component.html',
  styleUrls: ['./commits-list.component.scss']
})
export class CommitsListComponent {
  // Component Variable
  repoName: string | undefined;
  selectedBranch: IBranch | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.repoName = params['repoName'];
    });
  }

}
