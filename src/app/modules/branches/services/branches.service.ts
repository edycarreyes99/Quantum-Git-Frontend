import {Injectable} from '@angular/core';
import {GITHUB_ACCESS_TOKEN_LS} from "../../../core/constants/local-storage.constants";
import {Octokit} from "octokit";
import {AuthService} from "../../auth/services/auth.service";
import {BRANCHES_URL} from "../../../core/constants/api/branch.constants";
import {readableStreamLikeToAsyncGenerator} from "rxjs/internal/util/isReadableStreamLike";
import {IBranch} from "../interfaces/branch";

@Injectable({
  providedIn: 'root'
})
export class BranchesService {
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

  // Method to fetch all branches of a repo
  async index(repoName: string): Promise<IBranch[]> {
    return new Promise<IBranch[]>(async (resolve, rejects) => {
      await this.authService.getCurrentUserFromGitHub().then(async (githubUser) => {
        await this.octokit?.request(BRANCHES_URL, {
          owner: githubUser.login,
          repo: repoName,
          per_page: 100
        }).then((branches: Record<string, any>) => {
          console.log('branches are:', branches)
          resolve(branches['data']);
        }).catch((error) => {
          console.error('Error fetching branches for the current user logged in and the repo passed:', error);
          rejects(error);
        });
      }).catch((error) => {
        console.error('Error fetching user from github:', error);
        rejects(error);
      })
    });
  }
}
