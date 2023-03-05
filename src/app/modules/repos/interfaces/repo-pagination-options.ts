export interface IRepoPaginationOptions {
  accept?: string,
  visibility?: 'all' | 'public' | 'private',
  type?: 'all' | 'owner' | 'collaborator' | 'public' | 'private' | 'member';
  affiliation: ('owner' | 'collaborator' | 'organization_member')[];
  sort?: 'created' | 'updated' | 'pushed' | 'full_name';
  direction?: 'asc' | 'desc';
  per_page?: number;
  page?: number;
  since?: string;
  before?: string;
}
