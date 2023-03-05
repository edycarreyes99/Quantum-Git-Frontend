import {IRepoPaginationOptions} from '../interfaces/repo-pagination-options';

export class RepoPaginationOptions implements IRepoPaginationOptions {
  accept: string = 'application/vnd.github+json';
  affiliation: ('owner' | 'collaborator' | 'organization_member')[] | string = ['owner', 'collaborator', 'organization_member'];
  before: string = '';
  sort: 'created' | 'updated' | 'pushed' | 'full_name' = 'updated';
  direction: 'asc' | 'desc' = this.sort === 'full_name' ? 'asc' : 'desc';
  page: number = 1;
  per_page: number = 30;
  since: string = '';
  visibility: 'all' | 'public' | 'private' = 'all';
  type: 'all' | 'owner' | 'collaborator' | 'public' | 'private' | 'member' | undefined = !!this.affiliation || !!this.visibility ? undefined : 'all';

  // Method to convert the current class to a flat object
  toJSON(): IRepoPaginationOptions {
    return Object.assign({}, this);
  }

}
