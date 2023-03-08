import {Component, OnInit, ViewChild} from '@angular/core';
import {ReposService} from "../../services/repos.service";
import {IRepo} from "../../interfaces/repo";
import {
  QuantumGitPaginatorComponent
} from "../../../../core/components/quantum-git-paginator/quantum-git-paginator.component";
import {NotificationsService} from "../../../../core/services/notifications/notifications.service";
import {ERROR_TOAST, WARNING_TOAST} from "../../../../core/constants/toast.constants";
import {IPagination} from "../../../../core/interfaces/pagination";

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit {
  // Component Variables
  repos: IRepo[] = [];
  loading: boolean = true;
  empty: boolean = false;
  pagination: IPagination | undefined;

  constructor(
    private reposService: ReposService,
    private notificationService: NotificationsService
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.fetchAllRepos();
  }

  async fetchAllRepos(page?: number | undefined): Promise<IRepo[]> {
    return new Promise<IRepo[]>(async (resolve, rejects) => {
      this.loading = true;

      await this.reposService.index({
        page: page ?? 1,
        per_page: 35
      }).subscribe({
        next: (reposResponse) => {
          this.repos = reposResponse.data;
          this.loading = false;

          const {first, next, previous, last} = {...reposResponse};

          this.pagination = {
            first,
            next,
            previous,
            last
          };

          if (this.repos.length === 0)
            this.empty = true;

          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });

          if (this.empty) {
            this.notificationService
              .showToast(
                WARNING_TOAST,
                'Content is empty',
                'The repositories list is empty.'
              );
          }

          resolve(reposResponse.data);
        },
        error: (error) => {
          console.error('Error fetching repos:', error);
          this.loading = false;
          if (this.repos.length === 0)
            this.empty = true;
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          this.notificationService.showToast(
            ERROR_TOAST,
            'Error Fetching Repos',
            'An error occurred while fetching the repos list.'
          );
          rejects(error);
        }
      });
    });
  }

}
