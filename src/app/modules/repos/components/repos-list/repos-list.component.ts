import {Component, OnInit, ViewChild} from '@angular/core';
import {ReposService} from "../../services/repos.service";
import {IRepo} from "../../interfaces/repo";
import {RepoPaginationOptions} from "../../models/repo-pagination-options";
import {
  QuantumGitPaginatorComponent
} from "../../../../core/components/quantum-git-paginator/quantum-git-paginator.component";

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit {
  // ViewChild Variables
  @ViewChild('quantumGitPaginator') quantumGitPaginator: QuantumGitPaginatorComponent | undefined;

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

  async fetchAllRepos(page?: number | undefined): Promise<IRepo[]> {
    return new Promise<IRepo[]>(async (resolve, rejects) => {
      this.loading = true;
      const paginationOptions = new RepoPaginationOptions();

      if (!!page)
        paginationOptions.page = page;

      await this.reposService.index(paginationOptions).then((repos) => {
        this.repos = repos;
        this.loading = false;
        if (this.repos.length === 0)
          this.empty = true;
        setTimeout(() => {
          if (!this.empty)
            this.quantumGitPaginator?.parsePaginationString(this.repos[0].pagination)
        }, 500);
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        resolve(repos);
      }).catch((error) => {
        console.error('Error fetching repos:', error);
        this.loading = false;
        if (this.repos.length === 0)
          this.empty = true;
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        rejects(error);
      });
    });
  }

}
