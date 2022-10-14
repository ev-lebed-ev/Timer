import { applyMiddleware, legacy_createStore } from "redux";
import { rootReducer } from "./Reducers";
import { state } from "./State";
import { handleQueryString } from "./HandleQueryString";

const store = legacy_createStore(
  rootReducer,
  state,
  applyMiddleware(handleQueryString),
  );

export { store };
