import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IBranch} from "../../../branches/interfaces/branch";
import {CommitsService} from "../../services/commits.service";
import {ICommit} from "../../interfaces/commit";
import * as moment from "moment";
import {IGroupedCommits} from "../../interfaces/grouped-commits";
import {
  QuantumGitPaginatorComponent
} from "../../../../core/components/quantum-git-paginator/quantum-git-paginator.component";
import {NotificationsService} from "../../../../core/services/notifications/notifications.service";
import {ERROR_TOAST} from "../../../../core/constants/toast.constants";

@Component({
  selector: 'app-commits-list',
  templateUrl: './commits-list.component.html',
  styleUrls: ['./commits-list.component.scss']
})
export class CommitsListComponent {
  // ViewChild Variables
  @ViewChild('quantumGitPaginator') quantumGitPaginator: QuantumGitPaginatorComponent | undefined;

  // Component Variable
  repoName: string | undefined;
  selectedBranch: IBranch | undefined;
  commits: ICommit[] = [];
  groupedCommits: IGroupedCommits[] = [];
  loading = true;
  empty = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private commitsService: CommitsService,
    private notificationsService: NotificationsService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.repoName = params['repoName'];
    });
  }

  fetchCommits(page?: number | undefined): Promise<ICommit[]> {
    return new Promise<ICommit[]>(async (resolve, rejects) => {
      this.loading = true;
      await this.commitsService.index({
        repo: this.repoName ?? '',
        sha: this.selectedBranch?.commit?.sha ?? '',
        page,
        per_page: 35
      }).subscribe({
        next: (commitsResponse) => {
          this.commits = commitsResponse.data;
          this.groupCommitsByDate();

          if (this.commits.length === 0)
            this.empty = true;

          setTimeout(() => {
            if (!this.empty)
              this.quantumGitPaginator?.setPagination(commitsResponse);
          }, 500);

          this.loading = false;

          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          resolve(commitsResponse.data);
        },
        error: (error) => {
          this.loading = false;
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          this.notificationsService.showToast(
            ERROR_TOAST,
            'Error fetching commits',
            'An error occurred while fetching the commit list for the current repository.'
          );
          rejects(error);
        }
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

        if (arr.length === 1) {
          groupedCommits.push({
            date: currentCommitDate,
            commits: currentDateCommits
          });
          currentDateCommits = [];
        }

      } else {
        currentDateCommits.push(commit);
        groupedCommits.push({
          date: currentCommitDate,
          commits: currentDateCommits
        });
        currentDateCommits = [];
      }
    });

    this.groupedCommits = groupedCommits;
  }

}
