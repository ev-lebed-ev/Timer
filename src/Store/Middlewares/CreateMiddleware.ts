import { ActionCreator } from "../Reducers/CreateRootReducer";
import { actionTypeSymbol } from "../Utils/GetActionTypeToHalders";
import { AppMiddleware } from "./CreateRootMiddleware";

const createMiddleware = <A extends ActionCreator>(actionCreators: Array<A>, middleware: AppMiddleware<A>): AppMiddleware<A> => {
  middleware[actionTypeSymbol] = actionCreators.map((actionCreator) => actionCreator().type);

  return middleware;
};

export { createMiddleware };
