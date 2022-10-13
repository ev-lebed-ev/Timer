import { createActionCreator } from "./Utils/CreateActionCreator";

const appMountedAction = createActionCreator(
  "APP_MOUNTED",
);

const workUpdatedAction = createActionCreator(
  "WORK_UPDATED",
  (work: number) => ({ work }),
);

const restUpdatedAction = createActionCreator(
  "REST_UPDATED",
  (rest: number) => ({ rest }),
);

const countUpdatedAction = createActionCreator(
  "COUNT_UPDATED",
  (count: number) => ({ count }),
);

export {
  appMountedAction,
  workUpdatedAction,
  restUpdatedAction,
  countUpdatedAction,
};
