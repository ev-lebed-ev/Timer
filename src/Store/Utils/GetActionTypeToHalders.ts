import { isNil } from "../../Utils/IsNil";
import { makeNonNilable } from "../../Utils/MakeNonNilable";

const actionTypeSymbol = Symbol("actionType");

type ActionHandler = {
  [actionTypeSymbol]?: Array<string>;
};

const getActionTypeToHandlers = <H extends ActionHandler>(handlers: Array<H>): Map<string, Array<H>> => {
  const actionTypeToHandlers = new Map<string, Array<H>>();

  handlers.forEach((handler, index) => {
    const actionTypes = handler[actionTypeSymbol];

    if (isNil(actionTypes)) {
      throw new Error(`Handler without action type was provided by index ${index}`);
    }

    actionTypes.forEach((actionType) => {
      if (!actionTypeToHandlers.has(actionType)) {
        actionTypeToHandlers.set(actionType, []);
      }

      actionTypeToHandlers.set(
        actionType,
        [...makeNonNilable(actionTypeToHandlers.get(actionType), "Handlers by action type"), handler],
      );
    })
  });

  return actionTypeToHandlers;
};

export type { ActionHandler };
export { actionTypeSymbol, getActionTypeToHandlers };
