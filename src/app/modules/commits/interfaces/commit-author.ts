import * as moment from "moment";

export interface ICommitAuthor {
  name: string;
  email: string;
  date: moment.Moment;
}
