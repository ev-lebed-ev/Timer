import { Middleware } from "redux";
import { State } from "./State";
import { ExplicitAny } from "../Utils/ExplicitAny";
import { Action } from "./Utils/CreateRootReducer";

const updateQueryString: Middleware<never, State, ExplicitAny> = (store) =>
  (next) =>
    (action: Action) => {
      next(action);

      const state = store.getState();

      console.log(JSON.stringify(state));
    };

export { updateQueryString };
