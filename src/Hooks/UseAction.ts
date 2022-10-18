import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../Store/Utils/ActionCreator";
import { ExplicitAny } from "../Utils/ExplicitAny";

const useAction = <A extends Array<ExplicitAny>>(actionCreator: ActionCreator<A>): (...args: A) => void => {
  const dispatch = useDispatch();

  return useCallback(
    (...args) => {
      dispatch(actionCreator(...args));
    },
    [actionCreator],
  );
};

export { useAction };
