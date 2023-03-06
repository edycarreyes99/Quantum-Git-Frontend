import {Injectable} from '@angular/core';
import {Octokit} from "octokit";
import {GITHUB_ACCESS_TOKEN_LS} from "../../../core/constants/local-storage.constants";
import {AuthService} from "../../auth/services/auth.service";
import {COMMITS_URL} from "../../../core/constants/api/commits.constants";
import * as moment from "moment";
import {ICommit} from "../interfaces/commit";

@Injectable({
  providedIn: 'root'
})
export class CommitsService {
  // Service Variables
  accessToken: string = '';
  octokit: Octokit | undefined;

  constructor(
    private authService: AuthService
  ) {
    this.accessToken = localStorage.getItem(GITHUB_ACCESS_TOKEN_LS) ?? '';
    this.octokit = new Octokit({
      auth: this.accessToken
    });
  }

  index(branchSHA: string, repoName: string): Promise<ICommit[]> {
    return new Promise<ICommit[]>(async (resolve, rejects) => {
      await this.authService.getCurrentUserFromGitHub().then(async (githubUser) => {
        await this.octokit?.request(COMMITS_URL, {
          owner: githubUser.login,
          repo: repoName,
          sha: branchSHA,
          per_page: 30
        }).then((commits: Record<string, any>) => {
          console.log('commits are:', commits)
          resolve(commits['data']);
        }).catch((error) => {
          console.error('Error fetching commits for the selected branch and the user logged in and the repo passed:', error);
          rejects(error);
        });
      }).catch((error) => {
        console.error('Error fetching user from github:', error);
        rejects(error);
      })
    });
  }
}
