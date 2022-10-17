import { createActionCreator } from "./Utils/CreateActionCreator";
import { Preset } from "./State";
import { Sign } from "../Utils/Sign";
import { Nilable } from "../Utils/Nilable";

const appMountedAction = createActionCreator(
  "APP_MOUNTED",
);

const workUpdatedAction = createActionCreator(
  "WORK_UPDATED",
  (sign: Sign) => sign,
);

const restUpdatedAction = createActionCreator(
  "REST_UPDATED",
  (sign: Sign) => sign,
);

const namesCountUpdatedAction = createActionCreator(
  "NAMES_COUNT_UPDATED",
  (sign: Sign) => sign,
);

const presetParsedAction = createActionCreator(
  "PRESET_PARSED",
  (preset: Preset) => preset,
);

const nameUpdatedAction = createActionCreator(
  "NAME_UPDATED",
  (name: Nilable<string>, index: number) => ({ index, name }),
)

const presetCreatedAction = createActionCreator(
  "PRESET_CREATED",
);

const presetEditedAction = createActionCreator(
  "PRESET_EDITED",
);

const startAction = createActionCreator(
  "START",
);

const resumeAction = createActionCreator(
  "RESUME",
);

const pausedAction = createActionCreator(
  "PAUSED",
);

const countdownUpdatedAction = createActionCreator(
  "COUNTDOWN_UPDATED",
);

const leftUpdatedAction = createActionCreator(
  "LEFT_UPDATED",
);

export {
  appMountedAction,
  workUpdatedAction,
  restUpdatedAction,
  namesCountUpdatedAction,
  presetParsedAction,
  nameUpdatedAction,
  presetCreatedAction,
  presetEditedAction,
  startAction,
  resumeAction,
  pausedAction,
  countdownUpdatedAction,
  leftUpdatedAction,
};
