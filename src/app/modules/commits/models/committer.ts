import {ICommitter} from "../interfaces/committer";

export class Committer implements ICommitter {
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

  constructor(committer?: ICommitter | undefined) {
    if (committer) {
      this.avatar_url = committer.avatar_url;
      this.events_url = committer.events_url;
      this.followers_url = committer.followers_url;
      this.following_url = committer.following_url;
      this.gists_url = committer.gists_url;
      this.gravatar_id = committer.gravatar_id;
      this.html_url = committer.html_url;
      this.id = committer.id;
      this.login = committer.login;
      this.node_id = committer.node_id;
      this.organizations_url = committer.organizations_url;
      this.received_events_url = committer.received_events_url;
      this.repos_url = committer.repos_url;
      this.site_admin = committer.site_admin;
      this.starred_url = committer.starred_url;
      this.subscriptions_url = committer.subscriptions_url;
      this.type = committer.type;
      this.url = committer.url;
    }
  }

  // Method to convert the current class to a flat object
  toJSON(): ICommitter {
    return Object.assign({}, this);
  }

}
