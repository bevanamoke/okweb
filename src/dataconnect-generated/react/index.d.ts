import { AddProjectTaskData, AddProjectTaskVariables, ListProjectsForClientData, ListProjectsForClientVariables, UpdateProjectStatusData, UpdateProjectStatusVariables, ListUsersData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useAddProjectTask(options?: useDataConnectMutationOptions<AddProjectTaskData, FirebaseError, AddProjectTaskVariables>): UseDataConnectMutationResult<AddProjectTaskData, AddProjectTaskVariables>;
export function useAddProjectTask(dc: DataConnect, options?: useDataConnectMutationOptions<AddProjectTaskData, FirebaseError, AddProjectTaskVariables>): UseDataConnectMutationResult<AddProjectTaskData, AddProjectTaskVariables>;

export function useListProjectsForClient(vars: ListProjectsForClientVariables, options?: useDataConnectQueryOptions<ListProjectsForClientData>): UseDataConnectQueryResult<ListProjectsForClientData, ListProjectsForClientVariables>;
export function useListProjectsForClient(dc: DataConnect, vars: ListProjectsForClientVariables, options?: useDataConnectQueryOptions<ListProjectsForClientData>): UseDataConnectQueryResult<ListProjectsForClientData, ListProjectsForClientVariables>;

export function useUpdateProjectStatus(options?: useDataConnectMutationOptions<UpdateProjectStatusData, FirebaseError, UpdateProjectStatusVariables>): UseDataConnectMutationResult<UpdateProjectStatusData, UpdateProjectStatusVariables>;
export function useUpdateProjectStatus(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateProjectStatusData, FirebaseError, UpdateProjectStatusVariables>): UseDataConnectMutationResult<UpdateProjectStatusData, UpdateProjectStatusVariables>;

export function useListUsers(options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;
export function useListUsers(dc: DataConnect, options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;
