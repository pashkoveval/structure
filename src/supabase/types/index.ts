import type { DefaultSchema } from './database';

export type Tables = keyof DefaultSchema['Tables'];
export type TableRow<T extends Tables> = DefaultSchema['Tables'][T]['Row'];

export type Handbook = TableRow<'handbooks'>;
export type Roles = TableRow<'roles'>;
export type RolesGroups = TableRow<'rolesGroups'>;
export type Statuses = TableRow<'statuses'>;
