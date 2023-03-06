import {ICommit} from "../interfaces/commit";
import {IAuthor} from "../interfaces/author";
import {ICommitInfo} from "../interfaces/commit-info";
import {ICommitter} from "../interfaces/committer";
import {IParentCommit} from "../interfaces/parent-commit";
import {Author} from "./author";
import {CommitInfo} from "./commit-info";
import {Committer} from "./committer";

export class Commit implements ICommit {
  author: IAuthor = new Author();
  comments_url: string = '';
  commit: ICommitInfo = new CommitInfo();
  committer: ICommitter = new Committer();
  html_url: string = '';
  node_id: string = '';
  parents: IParentCommit[] = [];
  sha: string = '';
  url: string = '';

  constructor(commit?: ICommit | undefined) {
    if (commit) {
      this.author = commit.author;
      this.comments_url = commit.comments_url;
      this.commit = commit.commit;
      this.committer = commit.committer;
      this.html_url = commit.html_url;
      this.node_id = commit.node_id;
      this.parents = commit.parents;
      this.sha = commit.sha;
      this.url = commit.url;
    }
  }

  // Method to convert the current class to a flat object
  toJSON(): ICommit {
    return Object.assign({}, this);
  }

}
