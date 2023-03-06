import {ICommitAuthor} from "../interfaces/commit-author";
import * as moment from "moment";

export class CommitAuthor implements ICommitAuthor {
  date: moment.Moment = moment();
  email: string = '';
  name: string = '';

  constructor(commitAuthor?: ICommitAuthor | undefined) {
    if (commitAuthor) {
      this.date = commitAuthor.date;
      this.email = commitAuthor.email;
      this.name = commitAuthor.name;
    }
  }

  // Method to convert the current class to a flat object
  toJSON(): ICommitAuthor {
    return Object.assign({}, this);
  }

}
