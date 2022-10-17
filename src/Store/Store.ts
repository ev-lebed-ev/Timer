import { applyMiddleware, legacy_createStore } from "redux";
import { rootReducer } from "./Reducers/RootReducer";
import { initialState } from "./State";
import { rootMiddleware } from "./Middlewares/RootMiddleware";

const store = legacy_createStore(
  rootReducer,
  initialState,
  applyMiddleware(rootMiddleware),
);

export { store };
