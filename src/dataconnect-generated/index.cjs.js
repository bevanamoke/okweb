const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'okswebsite',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const addProjectTaskRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddProjectTask', inputVars);
}
addProjectTaskRef.operationName = 'AddProjectTask';
exports.addProjectTaskRef = addProjectTaskRef;

exports.addProjectTask = function addProjectTask(dcOrVars, vars) {
  return executeMutation(addProjectTaskRef(dcOrVars, vars));
};

const listProjectsForClientRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProjectsForClient', inputVars);
}
listProjectsForClientRef.operationName = 'ListProjectsForClient';
exports.listProjectsForClientRef = listProjectsForClientRef;

exports.listProjectsForClient = function listProjectsForClient(dcOrVars, vars) {
  return executeQuery(listProjectsForClientRef(dcOrVars, vars));
};

const updateProjectStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateProjectStatus', inputVars);
}
updateProjectStatusRef.operationName = 'UpdateProjectStatus';
exports.updateProjectStatusRef = updateProjectStatusRef;

exports.updateProjectStatus = function updateProjectStatus(dcOrVars, vars) {
  return executeMutation(updateProjectStatusRef(dcOrVars, vars));
};

const listUsersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListUsers');
}
listUsersRef.operationName = 'ListUsers';
exports.listUsersRef = listUsersRef;

exports.listUsers = function listUsers(dc) {
  return executeQuery(listUsersRef(dc));
};
