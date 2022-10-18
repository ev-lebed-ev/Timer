import { AppMiddleware } from "./CreateRootMiddleware";
import { hydrateHandlerWithActionType } from "../Utils/HydrateHandlerWithActionType";
import { ActionCreator } from "../Utils/ActionCreator";

const createMiddleware = <A extends ActionCreator, M extends AppMiddleware<A>>(actionCreators: Array<A>, middleware: M) =>
  hydrateHandlerWithActionType<A, M>(actionCreators, middleware);

export { createMiddleware };
