import {IRepoOwner} from "../interfaces/repo-owner";

export class RepoOwner implements IRepoOwner {
  avatar_url: string = '';
  events_url: string = '';
  followers_url: string = '';
  following_url: string = '';
  gists_url: string = '';
  gravatar_id: string = '';
  html_url: string = '';
  id: number = 0;
  login: string = '';
  node_id: string = '';
  organizations_url: string = '';
  received_events_url: string = '';
  repos_url: string = '';
  site_admin: boolean = false;
  starred_url: string = '';
  subscriptions_url: string = '';
  type: string = '';
  url: string = '';

  constructor(repoOwner?: IRepoOwner | undefined) {
    if (repoOwner) {
      this.avatar_url = repoOwner.avatar_url;
      this.events_url = repoOwner.events_url;
      this.followers_url = repoOwner.followers_url;
      this.following_url = repoOwner.following_url;
      this.gists_url = repoOwner.gists_url;
      this.gravatar_id = repoOwner.gravatar_id;
      this.html_url = repoOwner.html_url;
      this.id = repoOwner.id;
      this.login = repoOwner.login;
      this.node_id = repoOwner.node_id;
      this.organizations_url = repoOwner.organizations_url;
      this.received_events_url = repoOwner.received_events_url;
      this.repos_url = repoOwner.repos_url;
      this.site_admin = repoOwner.site_admin;
      this.starred_url = repoOwner.starred_url;
      this.subscriptions_url = repoOwner.subscriptions_url;
      this.type = repoOwner.type;
      this.url = repoOwner.url;
    }
  }

  // Method to convert the current class to a flat object
  toJSON(): IRepoOwner {
    return Object.assign({}, this);
  }

}
