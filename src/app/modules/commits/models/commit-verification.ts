import {ICommitVerification} from "../interfaces/commit-verification";

export class CommitVerification implements ICommitVerification {
  payload: any | undefined;
  reason: string = '';
  signature: any | undefined;
  verified: boolean = false;

  constructor(commitVerification?: ICommitVerification | undefined) {
    if (commitVerification) {
      this.payload = commitVerification.payload;
      this.reason = commitVerification.reason;
      this.signature = commitVerification.signature;
      this.verified = commitVerification.verified;
    }
  }

  // Method to convert the current class to a flat object
  toJSON(): ICommitVerification {
    return Object.assign({}, this);
  }

}
