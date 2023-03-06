import {ICommitInfo} from "../interfaces/commit-info";
import {CommitAuthor} from "./commit-author";
import {ICommitAuthor} from "../interfaces/commit-author";
import {ICommitCommitter} from "../interfaces/commit-committer";
import {ITree} from "../interfaces/tree";
import {ICommitVerification} from "../interfaces/commit-verification";
import {CommitCommitter} from "./commit-committer";
import {Tree} from "./tree";
import {CommitVerification} from "./commit-verification";

export class CommitInfo implements ICommitInfo {
  author: ICommitAuthor = new CommitAuthor();
  comment_count: number = 0;
  committer: ICommitCommitter = new CommitCommitter();
  message: string = '';
  tree: ITree = new Tree();
  url: string = '';
  verification: ICommitVerification = new CommitVerification();

  constructor(commitInfo?: ICommitInfo | undefined) {
    if (commitInfo) {
      this.author = commitInfo.author;
      this.comment_count = commitInfo.comment_count;
      this.committer = commitInfo.committer;
      this.message = commitInfo.message;
      this.tree = commitInfo.tree;
      this.url = commitInfo.url;
      this.verification = commitInfo.verification;
    }

  }

  // Method to convert the current class to a flat object
  toJSON(): ICommitInfo {
    return Object.assign({}, this);
  }

}
