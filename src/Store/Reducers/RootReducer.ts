import {
  countdownUpdatedAction,
  leftUpdatedAction,
  namesCountUpdatedAction,
  nameUpdatedAction,
  pausedAction,
  presetCreatedAction,
  presetEditedAction,
  presetParsedAction,
  restUpdatedAction,
  resumeAction,
  startAction,
  workUpdatedAction
} from "../Actions";
import { ActionCreator, AppReducer, createRootReducer } from "./CreateRootReducer";
import { createReducer } from "./CreateReducer";
import { isNil } from "../../Utils/IsNil";
import { clampNumber } from "../../Utils/ClampNumber";
import { Sign } from "../../Utils/Sign";
import { Layout, Preset } from "../State";
import {
  countdownSelector,
  isPresetValidSelector,
  isWorkingSelector,
  iterationSelector,
  leftSelector,
  namesCountSelector,
  namesSelector,
  restSelector,
  workSelector
} from "../Selectors";
import { isPresetValid } from "../Utils/IsPresetValid";
import { numberToOrdinal } from "../../Utils/NumberToOrdinal";

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

const updateNamesCountReducer = createReducer(
  [namesCountUpdatedAction],
  (state, sign) => {
    const currentCount = namesCountSelector(state);
    const nextCount = clampNumber(currentCount + sign, 1, Number.MAX_SAFE_INTEGER);

    if (nextCount === currentCount) {
      return state;
    }

    const currentNames = namesSelector(state);

    const names = new Array(nextCount)
      .fill(null)
      .map((_, index) => {
        const existingName = currentNames[index];

        if (isNil(existingName)) {
          return numberToOrdinal(index + 1);
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
    const layout: Layout = isPresetValid(preset)
      ? "Waiting"
      : "Creating";

    return {
      ...state,
      ...preset,
      layout,
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
        layout: "Waiting",
      };
    }

    return state;
  },
);

const editPresetReducer = createReducer(
  [presetEditedAction],
  (state) => ({
    ...state,
    layout: "Creating",
  }),
);

const startReducer = createReducer(
  [startAction],
  (state) => {
    const work = workSelector(state);

    return {
      ...state,
      layout: "Started",
      iteration: 0,
      left: work,
      countdown: 10,
    }
  },
);

const resumeReducer = createReducer(
  [resumeAction],
  (state) => ({
    ...state,
    layout: "Started",
    countdown: 10,
    paused: false,
  }),
);

const pauseReducer = createReducer(
  [pausedAction],
  (state) => ({
    ...state,
    countdown: 0,
    paused: true,
  }),
);

const updateCountdownReducer = createReducer(
  [countdownUpdatedAction],
  (state) => {
    const oldCountdown = countdownSelector(state);

    if (oldCountdown === 1) {
      return {
        ...state,
        countdown: 0,
      };
    }

    return {
      ...state,
      countdown: oldCountdown - 1,
    }
  },
);

const updateLeftReducer = createReducer(
  [leftUpdatedAction],
  (state) => {
    const oldLeft = leftSelector(state);
    const oldIteration = iterationSelector(state);
    const namesCount = namesCountSelector(state);
    const work = workSelector(state);
    const rest = restSelector(state);
    const isWorking = isWorkingSelector(state);

    if (oldLeft === 1) {
      const nextIteration = oldIteration + 1;

      if (namesCount === 1 || nextIteration + 1 === namesCount * 2) {
        return {
          ...state,
          layout: "Finished",
        };
      }

      return {
        ...state,
        left: isWorking ? rest : work,
        iteration: nextIteration,
      };
    }

    return {
      ...state,
      left: oldLeft - 1,
    }
  },
);

const rootReducer = createRootReducer(
  updateWorkReducer,
  updateRestReducer,
  updateNamesCountReducer,
  applyParsedPresetReducer,
  updateNameReducer,
  createPresetReducer,
  editPresetReducer,
  startReducer,
  resumeReducer,
  pauseReducer,
  updateCountdownReducer,
  updateLeftReducer,
);


export { rootReducer };
