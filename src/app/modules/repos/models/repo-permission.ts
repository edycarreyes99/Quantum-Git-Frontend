import {IRepoPermission} from "../interfaces/repo-permission";

export class RepoPermission implements IRepoPermission {
  admin: boolean = false;
  maintain: boolean = false;
  pull: boolean = false;
  push: boolean = false;
  triage: boolean = false;

  constructor(repoPermission?: IRepoPermission | undefined) {
    if (repoPermission) {
      this.admin = repoPermission.admin;
      this.maintain = repoPermission.maintain;
      this.pull = repoPermission.pull;
      this.push = repoPermission.push;
      this.triage = repoPermission.triage;
    }
  }

  // Method to convert the current class to a flat object
  toJSON(): IRepoPermission {
    return Object.assign({}, this);
  }

}
