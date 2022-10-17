import { Dispatch, Middleware } from "redux";
import { Preset, State } from "./State";
import { ExplicitAny } from "../Utils/ExplicitAny";
import { presetSelector } from "./Selectors";
import { Nilable } from "../Utils/Nilable";
import { isEmpty } from "../Utils/IsEmpty";
import { presetParsedAction } from "./Actions";
import { Action } from "./Utils/CreateRootReducer";

const parsePreset = (): Nilable<Preset> => {
  const queryString = window.location.search.slice(1);

  if (isEmpty(queryString)) {
    return null;
  }

  try {
    return JSON.parse(
      decodeURI(queryString),
      (_, value) => value === "null"
        ? null
        : value,
    );
  } catch {
    return null;
  }
};

const initialize = (dispatch: Dispatch) => {
  const parsedPreset = parsePreset();

  if (parsedPreset) {
    dispatch(presetParsedAction(parsedPreset));
  }
};

const replaceQueryString = (state: State) => {
  const preset = presetSelector(state);

  window.history.replaceState(null, "", `?${JSON.stringify(preset)}`);
};

const handleQueryString: Middleware<never, State, ExplicitAny> = (store) => {
  let initialized = false;


  return (next) =>
    (action: Action) => {
      if (!initialized) {
        initialize(next);

        initialized = true;
      }

      next(action);

      replaceQueryString(store.getState());
    };
}

export { handleQueryString };
