import {IBranch} from "../interfaces/branch";

export class Branch implements IBranch {
  commit: { sha: string; url: string } = {sha: '', url: ''};
  name: string = '';
  protected: boolean = false;

  constructor(branch?: IBranch | undefined) {
    if (branch) {
      this.commit = branch.commit;
      this.name = branch.name;
      this.protected = branch.protected;
    }
  }

  // Method to convert the current class to a flat object
  toJSON(): IBranch {
    return Object.assign({}, this);
  }

}
