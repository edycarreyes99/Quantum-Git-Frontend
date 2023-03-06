import {ITree} from "./tree";
import {ICommitVerification} from "./commit-verification";
import {ICommitAuthor} from "./commit-author";
import {ICommitCommitter} from "./commit-committer";

export interface ICommitInfo {
  author: ICommitAuthor;
  committer: ICommitCommitter;
  message: string;
  tree: ITree;
  url: string;
  comment_count: number;
  verification: ICommitVerification;
}
