import { createSimpleReducer } from "./Utils/CreateSimpleReducer";
import { countUpdatedAction, restUpdatedAction, workUpdatedAction } from "./Actions";
import { createRootReducer } from "./Utils/CreateRootReducer";

const updateWorkReducer = createSimpleReducer(
  [workUpdatedAction],
);

const updateRestReducer = createSimpleReducer(
  [restUpdatedAction],
);

const updateCountReducer = createSimpleReducer(
  [countUpdatedAction],
);

const rootReducer = createRootReducer(
  updateWorkReducer,
  updateRestReducer,
  updateCountReducer,
);


export { rootReducer };
