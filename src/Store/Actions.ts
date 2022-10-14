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

const countUpdatedAction = createActionCreator(
  "COUNT_UPDATED",
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

const activatedAction = createActionCreator(
  "ACTIVATED",
);

const pauseAction = createActionCreator(
  "PAUSE",
);

export {
  appMountedAction,
  workUpdatedAction,
  restUpdatedAction,
  countUpdatedAction,
  presetParsedAction,
  nameUpdatedAction,
  presetCreatedAction,
  presetEditedAction,
  activatedAction,
  pauseAction,
};
