import { Reducer as ReduxReducer } from "redux";
import { isNil } from "../../Utils/IsNil";
import { State } from "../State";
import { Action, ActionCreator } from "../Utils/ActionCreator";
import { ActionHandler, getActionTypeToHandlers } from "../Utils/GetActionTypeToHalders";

type Reducer<A extends ActionCreator = ActionCreator> =
  ((state: State, payload: ReturnType<A>["payload"]) => State);

type AppReducer<A extends ActionCreator = ActionCreator> = ActionHandler & Reducer<A>;

const createRootReducer = (...reducers: Array<AppReducer>): ReduxReducer<State, Action> => {
  const actionTypeToReducers = getActionTypeToHandlers<AppReducer>(reducers);

  return (state, action) => {
    if (isNil(state)) {
      throw new Error("No state provided");
    }

    /**
     * Redux on initialization run root reducer once with internal action and undefined state
     * Must skip this iteration to correctly validate reducers
     *
     * Internal actions in current redux version starts with "@redux/"
     * When updating redux version make sure that this logic is necessary and internal actions starts with same prefix
     */
    if (action.type.startsWith("@@redux/")) {
      return state;
    }

    const actionReducers = actionTypeToReducers.get(action.type);

    if (isNil(actionReducers)) {
      return state;
    }

    return actionReducers.reduce(
      (newState, reducer) => reducer(newState, action.payload),
      state,
    );
  };
};

export { Reducer, AppReducer, createRootReducer };
