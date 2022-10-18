import { AppReducer } from "./CreateRootReducer";
import { hydrateHandlerWithActionType } from "../Utils/HydrateHandlerWithActionType";
import { ActionCreator } from "../Utils/ActionCreator";

const createReducer = <A extends ActionCreator, R extends AppReducer<A>>(actionCreators: Array<A>, reducer: R) =>
  hydrateHandlerWithActionType<A, R>(actionCreators, reducer);

export { createReducer };
