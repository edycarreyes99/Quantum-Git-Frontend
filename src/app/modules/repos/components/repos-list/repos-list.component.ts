import {Component, OnInit} from '@angular/core';
import {ReposService} from "../../services/repos.service";
import {IRepo} from "../../interfaces/repo";

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit {
  // Component Variables
  repos: IRepo[] = [];

  constructor(
    private reposService: ReposService
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.fetchAllRepos();
  }

  async fetchAllRepos(): Promise<IRepo[]> {
    return new Promise<IRepo[]>(async (resolve, rejects) => {
      await this.reposService.index().then((repos) => {
        this.repos = repos;
        console.log('Repos are:', this.repos);
        resolve(repos);
      }).catch((error) => {
        console.error('Error fetching repos:', error);
        rejects(error);
      });
    });
  }

}
