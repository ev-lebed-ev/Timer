import { createMiddleware } from "./CreateMiddleware";
import { appMountedAction, presetParsedAction } from "../Actions";
import { Nilable } from "../../Utils/Nilable";
import { Preset } from "../State";
import { isEmpty } from "../../Utils/IsEmpty";

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

const initializeMiddleware = createMiddleware(
  [appMountedAction],
  (state, dispatch) => {
    const parsedPreset = parsePreset();

    if (parsedPreset) {
      dispatch(presetParsedAction(parsedPreset));
    }
  },
);

export { initializeMiddleware };
