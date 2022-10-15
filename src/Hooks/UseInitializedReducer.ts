import { DispatchWithoutAction, ReducerStateWithoutAction, useReducer } from "react";
import { ExplicitAny } from "../Utils/ExplicitAny";

const useInitializedReducer = <R extends () => ExplicitAny>(reducer: R): [ReducerStateWithoutAction<R>, DispatchWithoutAction] => {
  const [state, setState] = useReducer(reducer, reducer());

  return [state, setState];
};

export { useInitializedReducer };
