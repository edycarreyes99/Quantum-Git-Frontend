import {IParentCommit} from "../interfaces/parent-commit";

export class ParentCommit implements IParentCommit {
  commit: { sha: string; url: string } = {sha: '', url: ''};
  html_url: string = '';
  name: string = '';
  protected: boolean = false;

  constructor(parentCommit?: IParentCommit | undefined) {
    if (parentCommit) {
      this.commit = parentCommit.commit;
      this.html_url = parentCommit.html_url;
      this.name = parentCommit.name;
      this.protected = parentCommit.protected;
    }
  }

  toJSON(): IParentCommit {
    return Object.assign({}, this);
  }

}
