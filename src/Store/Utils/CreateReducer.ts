import { State } from "../State";
import { ActionCreator, Reducer } from "./CreateRootReducer";

const actionTypeSymbol = Symbol("actionType");

const createReducer = <A extends ActionCreator>(actionCreators: Array<A>, reducer: Reducer<State, A>): Reducer<State, A> => {
  reducer[actionTypeSymbol] = actionCreators.map((actionCreator)=> actionCreator().type);

  return reducer;
};

export { actionTypeSymbol, createReducer };
