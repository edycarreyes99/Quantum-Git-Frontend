import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IBranch} from "../../../branches/interfaces/branch";
import {CommitsService} from "../../services/commits.service";
import {ICommit} from "../../interfaces/commit";
import * as moment from "moment";
import {IGroupedCommits} from "../../interfaces/grouped-commits";

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
  groupedCommits: IGroupedCommits[] = [];

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
          this.groupCommitsByDate();
          resolve(commits);
        }).catch((error) => {
          rejects(error);
        });
    });
  }

  // Method to group the commits by date
  groupCommitsByDate() {
    const groupedCommits: IGroupedCommits[] = [];
    let currentDateCommits: ICommit[] = [];

    this.commits.forEach((commit, index, arr) => {
      const currentCommitDate = moment(commit.commit.committer.date).format('MMM DD, YYYY');
      const nextCommitDate = moment(arr[index + 1]?.commit?.committer?.date).format('MMM DD, YYYY')

      if (currentCommitDate === nextCommitDate) {
        currentDateCommits.push(commit);
      } else {
        currentDateCommits.push(commit);
        groupedCommits.push({
          date: currentCommitDate,
          commits: currentDateCommits
        });
        currentDateCommits = [];
      }
    });

    console.log('Grouped commits are:', groupedCommits);

    this.groupedCommits = groupedCommits;

  }

}
