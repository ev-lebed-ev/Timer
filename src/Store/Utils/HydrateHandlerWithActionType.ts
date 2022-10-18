import { ActionCreator } from "./ActionCreator";
import { ActionHandler, actionTypeSymbol } from "./GetActionTypeToHalders";

const hydrateHandlerWithActionType = <A extends ActionCreator, H extends ActionHandler>(actionCreators: Array<A>, handler: H): H => {
  handler[actionTypeSymbol] = actionCreators.map((actionCreator) => actionCreator().type);

  return handler;
};

export { hydrateHandlerWithActionType };
