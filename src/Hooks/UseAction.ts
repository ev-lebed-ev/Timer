import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ExplicitAny } from "../Utils/ExplicitAny";
import { ActionCreator } from "../Store/Utils/CreateRootReducer";

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
