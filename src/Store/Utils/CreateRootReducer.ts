import { Reducer as ReduxReducer } from "redux";
import { ExplicitAny } from "../../Utils/ExplicitAny";
import { isNil } from "../../Utils/IsNil";
import { makeNonNilable } from "../../Utils/MakeNonNilable";
import { State } from "../State";
import { actionTypeSymbol } from "./CreateReducer";

type Action<P extends ExplicitAny = ExplicitAny> = {
  type: string;
  payload: P;
};

type ActionCreator<A extends Array<ExplicitAny> = Array<ExplicitAny>, P extends ExplicitAny = ExplicitAny> = (...args: A) => Action<P>;

type Reducer<S = ExplicitAny, P extends ActionCreator = ActionCreator> =
  ((state: S, payload: ReturnType<P>["payload"]) => S)
  & { [actionTypeSymbol]?: Array<string> };

type AppReducer<P extends ActionCreator = ActionCreator> = Reducer<State, P>;

const getActionTypeToReducers = <S>(reducers: Array<AppReducer>): Map<string, Array<AppReducer>> => {
  const actionTypeToReducers = new Map<string, Array<AppReducer>>();

  reducers.forEach((reducer, index) => {
    const actionTypes = reducer[actionTypeSymbol];

    if (isNil(actionTypes)) {
      throw new Error(`Reducer without action type was provided by index ${index}`);
    }

    actionTypes.forEach((actionType) => {
      if (!actionTypeToReducers.has(actionType)) {
        actionTypeToReducers.set(actionType, []);
      }

      actionTypeToReducers.set(
        actionType,
        [...makeNonNilable(actionTypeToReducers.get(actionType), "Reducers by action type"), reducer],
      );
    })
  });

  return actionTypeToReducers;
};

const createRootReducer = (...reducers: Array<AppReducer>): ReduxReducer<State, Action> => {
  const actionTypeToReducers = getActionTypeToReducers(reducers);

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

export {
  Action,
  ActionCreator,
  Reducer,
  AppReducer,
  createRootReducer,
};
