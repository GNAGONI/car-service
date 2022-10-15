export const createAsyncActionSet = actionName => ({
  REQUEST: `${actionName}_REQUEST`,
  SUCCESS: `${actionName}_SUCCESS`,
  ERROR: `${actionName}_ERROR`,
  actionName,
});

export const createDelayedActionsSet = actionName => ({
  PROGRESS: `${actionName}_PROGRESS`,
  FINISH: `${actionName}_FINISH`,
  actionName,
});
