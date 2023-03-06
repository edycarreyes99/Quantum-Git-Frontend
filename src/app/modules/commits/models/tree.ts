import {ITree} from "../interfaces/tree";

export class Tree implements ITree {
  commit: { sha: string; url: string } = {sha: '', url: ''};
  name: string = '';
  protected: boolean = false;

  constructor(tree?: ITree | undefined) {
    if (tree) {
      this.commit = tree.commit;
      this.name = tree.name;
      this.protected = tree.protected;
    }
  }

  toJSON(): ITree {
    return Object.assign({}, this);
  }
}
