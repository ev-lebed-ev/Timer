import { Dispatch, Middleware as ReduxMiddleware } from "redux";
import { isNil } from "../../Utils/IsNil";
import { State } from "../State";
import { ExplicitAny } from "../../Utils/ExplicitAny";
import { presetSelector } from "../Selectors";
import { ActionHandler, getActionTypeToHandlers } from "../Utils/GetActionTypeToHalders";
import { Action, ActionCreator } from "../Utils/ActionCreator";

type Middleware<A extends ActionCreator = ActionCreator> =
  (state: State, dispatch: Dispatch<Action>, action: ReturnType<A>) => void;

type AppMiddleware<A extends ActionCreator = ActionCreator> = ActionHandler & Middleware<A>;

const replaceQueryString = (state: State) => {
  const preset = presetSelector(state);

  window.history.replaceState(null, "", `?${JSON.stringify(preset)}`);
};

const createRootMiddleware = (...middlewares: Array<AppMiddleware>): ReduxMiddleware<never, State, ExplicitAny> => {
  const actionTypeToMiddlewares = getActionTypeToHandlers<AppMiddleware>(middlewares);

  return (store) =>
    (next) =>
      (action: Action) => {
        next(action);

        const actionMiddlewares = actionTypeToMiddlewares.get(action.type);

        if (!isNil(actionMiddlewares)) {
          actionMiddlewares.forEach((middleware) => {
            middleware(store.getState(), store.dispatch, action)
          });
        }

        replaceQueryString(store.getState());
      };
};

export type { AppMiddleware };
export { createRootMiddleware };
