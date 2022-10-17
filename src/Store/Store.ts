import { applyMiddleware, legacy_createStore } from "redux";
import { rootReducer } from "./Reducers/RootReducer";
import { state } from "./State";
import { rootMiddleware } from "./Middlewares/RootMiddleware";

const store = legacy_createStore(
  rootReducer,
  state,
  applyMiddleware(rootMiddleware),
  );

export { store };
