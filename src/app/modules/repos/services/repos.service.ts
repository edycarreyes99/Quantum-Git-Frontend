import {Injectable} from '@angular/core';
import {Octokit} from "octokit";
import {GITHUB_ACCESS_TOKEN_LS} from "../../../core/constants/local-storage.constants";

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  accessToken: string = '';

  constructor() {
    this.accessToken = localStorage.getItem(GITHUB_ACCESS_TOKEN_LS) ?? '';
  }

  async index() {
    const octokit = new Octokit({
      auth: this.accessToken
    });

    await octokit.request('GET /user/repos', {
      'X-GitHub-Api-Version': '2022-11-28'
    }).then((repos) => {
      console.log('Repositories are:', repos)
    }).catch((error) => {
      console.error('Error fetching repositories for the current user logged in:', error);
    });
  }
}
