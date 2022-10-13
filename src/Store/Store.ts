import { applyMiddleware, legacy_createStore } from "redux";
import { rootReducer } from "./Reducers";
import { state } from "./State";
import { updateQueryString } from "./UpdateQueryString";

const store = legacy_createStore(
  rootReducer,
  state,
  applyMiddleware(updateQueryString),
  );

export { store };
