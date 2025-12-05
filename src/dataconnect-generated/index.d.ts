import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddProjectTaskData {
  projectTask_insert: ProjectTask_Key;
}

export interface AddProjectTaskVariables {
  assigneeId: UUIDString;
  projectId: UUIDString;
  dueDate: DateString;
  name: string;
  status: string;
}

export interface Client_Key {
  id: UUIDString;
  __typename?: 'Client_Key';
}

export interface Communication_Key {
  id: UUIDString;
  __typename?: 'Communication_Key';
}

export interface ListProjectsForClientData {
  projects: ({
    id: UUIDString;
    name: string;
    description?: string | null;
  } & Project_Key)[];
}

export interface ListProjectsForClientVariables {
  clientId: UUIDString;
}

export interface ListUsersData {
  users: ({
    id: UUIDString;
    displayName: string;
    email: string;
    role: string;
  } & User_Key)[];
}

export interface ProjectTask_Key {
  id: UUIDString;
  __typename?: 'ProjectTask_Key';
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface ServiceCategory_Key {
  id: UUIDString;
  __typename?: 'ServiceCategory_Key';
}

export interface UpdateProjectStatusData {
  project_update?: Project_Key | null;
}

export interface UpdateProjectStatusVariables {
  id: UUIDString;
  status: string;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface AddProjectTaskRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddProjectTaskVariables): MutationRef<AddProjectTaskData, AddProjectTaskVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddProjectTaskVariables): MutationRef<AddProjectTaskData, AddProjectTaskVariables>;
  operationName: string;
}
export const addProjectTaskRef: AddProjectTaskRef;

export function addProjectTask(vars: AddProjectTaskVariables): MutationPromise<AddProjectTaskData, AddProjectTaskVariables>;
export function addProjectTask(dc: DataConnect, vars: AddProjectTaskVariables): MutationPromise<AddProjectTaskData, AddProjectTaskVariables>;

interface ListProjectsForClientRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListProjectsForClientVariables): QueryRef<ListProjectsForClientData, ListProjectsForClientVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListProjectsForClientVariables): QueryRef<ListProjectsForClientData, ListProjectsForClientVariables>;
  operationName: string;
}
export const listProjectsForClientRef: ListProjectsForClientRef;

export function listProjectsForClient(vars: ListProjectsForClientVariables): QueryPromise<ListProjectsForClientData, ListProjectsForClientVariables>;
export function listProjectsForClient(dc: DataConnect, vars: ListProjectsForClientVariables): QueryPromise<ListProjectsForClientData, ListProjectsForClientVariables>;

interface UpdateProjectStatusRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProjectStatusVariables): MutationRef<UpdateProjectStatusData, UpdateProjectStatusVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateProjectStatusVariables): MutationRef<UpdateProjectStatusData, UpdateProjectStatusVariables>;
  operationName: string;
}
export const updateProjectStatusRef: UpdateProjectStatusRef;

export function updateProjectStatus(vars: UpdateProjectStatusVariables): MutationPromise<UpdateProjectStatusData, UpdateProjectStatusVariables>;
export function updateProjectStatus(dc: DataConnect, vars: UpdateProjectStatusVariables): MutationPromise<UpdateProjectStatusData, UpdateProjectStatusVariables>;

interface ListUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
  operationName: string;
}
export const listUsersRef: ListUsersRef;

export function listUsers(): QueryPromise<ListUsersData, undefined>;
export function listUsers(dc: DataConnect): QueryPromise<ListUsersData, undefined>;

