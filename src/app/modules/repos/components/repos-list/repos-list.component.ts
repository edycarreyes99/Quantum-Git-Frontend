import {Component, OnInit} from '@angular/core';
import {ReposService} from "../../services/repos.service";
import {IRepo} from "../../interfaces/repo";
import {RepoPaginationOptions} from "../../models/repo-pagination-options";

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

  constructor(
    private reposService: ReposService
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.fetchAllRepos();
  }

  async fetchAllRepos(): Promise<IRepo[]> {
    return new Promise<IRepo[]>(async (resolve, rejects) => {
      this.loading = true;
      const paginationOptions = new RepoPaginationOptions();
      await this.reposService.index(paginationOptions).then((repos) => {
        this.repos = repos;
        console.log('Repos are:', this.repos);
        this.loading = false;
        if (this.repos.length === 0)
          this.empty = true;
        resolve(repos);
      }).catch((error) => {
        console.error('Error fetching repos:', error);
        this.loading = false;
        if (this.repos.length === 0)
          this.empty = true;
        rejects(error);
      });
    });
  }

}
