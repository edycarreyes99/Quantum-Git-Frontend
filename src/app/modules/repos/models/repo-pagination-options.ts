import {IRepoPaginationOptions} from '../interfaces/repo-pagination-options';

export class RepoPaginationOptions implements IRepoPaginationOptions {
  accept: string = 'application/vnd.github+json';
  affiliation: ('owner' | 'collaborator' | 'organization_member')[] = ['owner', 'collaborator', 'organization_member'];
  before: string = '';
  sort: 'created' | 'updated' | 'pushed' | 'full_name' = 'full_name';
  direction: 'asc' | 'desc' = this.sort === 'full_name' ? 'asc' : 'desc';
  page: number = 1;
  per_page: number = 30;
  since: string = '';
  type: 'all' | 'owner' | 'collaborator' | 'public' | 'private' | 'member' = 'all';
  visibility: 'all' | 'public' | 'private' = 'all';

  // Method to convert the current class to a flat object
  toJSON(): IRepoPaginationOptions {
    return Object.assign({}, this);
  }

}
