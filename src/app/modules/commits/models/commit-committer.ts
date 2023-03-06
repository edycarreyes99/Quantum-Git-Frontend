import {ICommitCommitter} from "../interfaces/commit-committer";
import * as moment from "moment";

export class CommitCommitter implements ICommitCommitter {
  date: moment.Moment = moment();
  email: string = '';
  name: string = ''

  constructor(commitCommitter?: ICommitCommitter | undefined) {
    if (commitCommitter) {
      this.date = commitCommitter.date;
      this.email = commitCommitter.email;
      this.name = commitCommitter.name;
    }
  }

  // Method to convert the current class to a flat object
  toJSON(): ICommitCommitter {
    return Object.assign({}, this);
  }
}
