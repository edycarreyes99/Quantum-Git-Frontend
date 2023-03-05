import {Injectable} from '@angular/core';
import {Octokit} from "octokit";
import {GITHUB_ACCESS_TOKEN_LS} from "../../../core/constants/local-storage.constants";
import {IRepo} from "../interfaces/repo";
import {REPO_INDEX_URL} from "../../../core/constants/api/repo.constants";
import {DEFAULT_API_REQUEST_HEADERS} from "../../../core/constants/api/global-api.constants";
import {IRepoPaginationOptions} from "../interfaces/repo-pagination-options";

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  // Service Variables
  accessToken: string = '';
  octokit: Octokit | undefined;

  constructor() {
    this.accessToken = localStorage.getItem(GITHUB_ACCESS_TOKEN_LS) ?? '';
    this.octokit = new Octokit({
      auth: this.accessToken
    });
  }

  async index(paginationOptions: IRepoPaginationOptions): Promise<IRepo[]> {
    return new Promise<IRepo[]>(async (resolve, rejects) => {
      await this.octokit?.request(REPO_INDEX_URL, paginationOptions as any).then((repos: Record<string, any>) => {
        resolve(repos['data']);
      }).catch((error) => {
        console.error('Error fetching repositories for the current user logged in:', error);
        rejects(error);
      });
    });
  }
}
