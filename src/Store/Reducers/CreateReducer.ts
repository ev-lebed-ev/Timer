import { actionTypeSymbol } from "../Utils/GetActionTypeToHalders";
import { ActionCreator, AppReducer } from "./CreateRootReducer";

const createReducer = <A extends ActionCreator>(actionCreators: Array<A>, reducer: AppReducer<A>): AppReducer<A> => {
  reducer[actionTypeSymbol] = actionCreators.map((actionCreator)=> actionCreator().type);

  return reducer;
};

export { createReducer };
