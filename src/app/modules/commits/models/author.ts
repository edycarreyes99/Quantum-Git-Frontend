import {IAuthor} from "../interfaces/author";

export class Author implements IAuthor {
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

  constructor(author?: IAuthor | undefined) {
    if (author) {
      this.avatar_url = author.avatar_url;
      this.events_url = author.events_url;
      this.followers_url = author.followers_url;
      this.following_url = author.following_url;
      this.gists_url = author.gists_url;
      this.gravatar_id = author.gravatar_id;
      this.html_url = author.html_url;
      this.id = author.id;
      this.login = author.login;
      this.node_id = author.node_id;
      this.organizations_url = author.organizations_url;
      this.received_events_url = author.received_events_url;
      this.repos_url = author.repos_url;
      this.site_admin = author.site_admin;
      this.starred_url = author.starred_url;
      this.subscriptions_url = author.subscriptions_url;
      this.type = author.type;
      this.url = author.url;
    }
  }

  toJSON(): IAuthor {
    return Object.assign({}, this);
  }

}
