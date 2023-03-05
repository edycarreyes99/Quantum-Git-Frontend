import {Injectable} from '@angular/core';
import {Octokit} from "octokit";
import {GITHUB_ACCESS_TOKEN_LS} from "../../../core/constants/local-storage.constants";
import {Repo} from "../interfaces/repo";
import {REPO_INDEX_URL} from "../../../core/constants/api/repo.constants";
import {DEFAULT_API_REQUEST_HEADERS} from "../../../core/constants/api/global-api.constants";

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  accessToken: string = '';
  octokit: Octokit | undefined;

  constructor() {
    this.accessToken = localStorage.getItem(GITHUB_ACCESS_TOKEN_LS) ?? '';
    this.octokit = new Octokit({
      auth: this.accessToken
    });
  }

  async index(): Promise<Repo[]> {
    return new Promise<Repo[]>(async (resolve, rejects) => {
      await this.octokit?.request(REPO_INDEX_URL, DEFAULT_API_REQUEST_HEADERS).then((repos) => {
        console.log('Repositories are:', repos)
      }).catch((error) => {
        console.error('Error fetching repositories for the current user logged in:', error);
      });
    });
  }
}
