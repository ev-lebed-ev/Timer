import { ActionCreator, AppReducer } from "./CreateRootReducer";

const actionTypeSymbol = Symbol("actionType");

const createReducer = <A extends ActionCreator>(actionCreators: Array<A>, reducer: AppReducer<A>): AppReducer<A> => {
  reducer[actionTypeSymbol] = actionCreators.map((actionCreator)=> actionCreator().type);

  return reducer;
};

export { actionTypeSymbol, createReducer };
