import { applyMiddleware, legacy_createStore } from "redux";
import { rootReducer } from "./Reducers";
import { initialState } from "./State";
import { handleQueryString } from "./HandleQueryString";

const store = legacy_createStore(
  rootReducer,
  initialState,
  applyMiddleware(handleQueryString),
  );

export { store };
