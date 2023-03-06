import {ICommitInfo} from "./commit-info";
import {IAuthor} from "./author";
import {ICommitter} from "./committer";
import {IParentCommit} from "./parent-commit";

export interface ICommit {
  sha: string;
  node_id: string;
  commit: ICommitInfo;
  url: string;
  html_url: string;
  comments_url: string;
  author: IAuthor;
  committer: ICommitter;
  parents: IParentCommit[];
}
