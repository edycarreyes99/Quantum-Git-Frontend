import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IBranch} from "../../../branches/interfaces/branch";
import {CommitsService} from "../../services/commits.service";
import {ICommit} from "../../interfaces/commit";

@Component({
  selector: 'app-commits-list',
  templateUrl: './commits-list.component.html',
  styleUrls: ['./commits-list.component.scss']
})
export class CommitsListComponent {
  // Component Variable
  repoName: string | undefined;
  selectedBranch: IBranch | undefined;
  commits: ICommit[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private commitsService: CommitsService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.repoName = params['repoName'];
    });
  }

  fetchCommits(): Promise<ICommit[]> {
    return new Promise<ICommit[]>(async (resolve, rejects) => {
      await this.commitsService.index(this.selectedBranch?.commit.sha ?? '', this.repoName ?? '')
        .then((commits) => {
          this.commits = commits;
          // this.groupCommitsByDate();
          resolve(commits);
        }).catch((error) => {
          rejects(error);
        });
    });
  }

  // Method to group the commits by date
  groupCommitsByDate() {
    let i: number = 0;
    let len: number = this.commits.length;
    const groupedCommits: ICommit[][] = [];
    const currentDateCommits: ICommit[] = [];

    while (i < len) {
    }

  }

}
