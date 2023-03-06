import * as moment from "moment";
import {ICommit} from "./commit";

export interface IGroupedCommits {
  date: string;
  commits: ICommit[];
}
