import {
  activatedAction,
  countUpdatedAction,
  nameUpdatedAction,
  pauseAction,
  presetCreatedAction,
  presetEditedAction,
  presetParsedAction,
  restUpdatedAction,
  workUpdatedAction
} from "./Actions";
import { ActionCreator, AppReducer, createRootReducer } from "./Utils/CreateRootReducer";
import { createReducer } from "./Utils/CreateReducer";
import { isNil } from "../Utils/IsNil";
import { clampNumber } from "../Utils/ClampNumber";
import { Sign } from "../Utils/Sign";
import { Preset, Status } from "./State";
import { countSelector, isPresetValidSelector, namesSelector } from "./Selectors";
import { isPresetValid } from "./Utils/IsPresetValid";

const intervalPartsUpdateStep = 5;

const updateIntervalPartsReducerFactory = (property: keyof Pick<Preset, "work" | "rest">): AppReducer<ActionCreator<[Sign], Sign>> =>
  (state, sign) => {
    const currentValue = state[property];

    const nextValue = clampNumber(currentValue + intervalPartsUpdateStep * sign, intervalPartsUpdateStep, Number.MAX_SAFE_INTEGER);

    if (nextValue === currentValue) {
      return state;
    }

    return {
      ...state,
      [property]: nextValue,
    };
  };

const updateWorkReducer = createReducer(
  [workUpdatedAction],
  updateIntervalPartsReducerFactory("work"),
);

const updateRestReducer = createReducer(
  [restUpdatedAction],
  updateIntervalPartsReducerFactory("rest"),
);

const updateCountReducer = createReducer(
  [countUpdatedAction],
  (state, sign) => {
    const currentCount = countSelector(state);
    const nextCount = clampNumber(currentCount + sign, 1, Number.MAX_SAFE_INTEGER);

    if (nextCount === currentCount) {
      return state;
    }

    const currentNames = namesSelector(state);

    const names = new Array(nextCount)
      .fill(null)
      .map((name, index) => {
        const existingName = currentNames[index];

        if (isNil(existingName)) {
          return name;
        }

        return existingName;
      });

    return {
      ...state,
      names,
    };
  },
);

const applyParsedPresetReducer = createReducer(
  [presetParsedAction],
  (state, preset) => {
    const status: Status = isPresetValid(preset)
      ? "Waiting"
      : "Creating";

    return {
      ...state,
      ...preset,
      status,
    }
  },
);

const updateNameReducer = createReducer(
  [nameUpdatedAction],
  (state, payload) => {
    const { name, index } = payload;

    const names = [...namesSelector(state)];

    names[index] = name;

    return {
      ...state,
      names,
    };
  },
);

const createPresetReducer = createReducer(
  [presetCreatedAction],
  (state) => {
    if (isPresetValidSelector(state)) {
      return {
        ...state,
        status: "Waiting",
      };
    }

    return state;
  },
);

const editPresetReducer = createReducer(
  [presetEditedAction],
  (state) => ({
    ...state,
    status: "Creating",
  }),
);

const activateReducer = createReducer(
  [activatedAction],
  (state) => ({
    ...state,
    status: "Active",
  }),
);

const pauseReducer = createReducer(
  [pauseAction],
  (state) => ({
    ...state,
    status: "Paused",
  }),
);

const rootReducer = createRootReducer(
  updateWorkReducer,
  updateRestReducer,
  updateCountReducer,
  applyParsedPresetReducer,
  updateNameReducer,
  createPresetReducer,
  editPresetReducer,
  activateReducer,
  pauseReducer,
);


export { rootReducer };
