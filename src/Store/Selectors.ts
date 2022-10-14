import { Selector } from "react-redux";
import { createPropertySelector } from "./Utils/CreatePropertySelector";
import { Preset, State, Status } from "./State";
import { createSelector } from "reselect";
import { createSimpleSelector } from "./Utils/CreateSimpleSelector";
import { isNil } from "../Utils/IsNil";
import { isString } from "../Utils/IsString";
import { isPresetValid } from "./Utils/IsPresetValid";

type AppSelector<R> = Selector<State, R>;

const stateSelector: AppSelector<State> = (state) => state;

const workSelector = createPropertySelector(
  stateSelector,
  ["work"],
);

const restSelector = createPropertySelector(
  stateSelector,
  ["rest"],
);

const namesSelector = createPropertySelector(
  stateSelector,
  ["names"],
);

const nameSelector = (index: number) =>
  createPropertySelector(
    namesSelector,
    [index],
  );

const countSelector = createPropertySelector(
  namesSelector,
  ["length"],
);

const presetSelector = createSelector(
  workSelector,
  restSelector,
  namesSelector,
  (work, rest, names): Preset => ({
    work,
    rest,
    names,
  }),
);

const statusSelector = createPropertySelector(
  stateSelector,
  ["status"],
);

const specificStatusSelectorFactory = (status: Status) =>
  createSimpleSelector(
    statusSelector,
    (currentStatus) => currentStatus === status,
  );

const isCreatingSelector = specificStatusSelectorFactory("Creating");

const isWaitingSelector = specificStatusSelectorFactory("Waiting");

const isPresetValidSelector = createSelector(
  presetSelector,
  isPresetValid,
);

export type { AppSelector };
export {
  workSelector,
  restSelector,
  countSelector,
  presetSelector,
  namesSelector,
  nameSelector,
  statusSelector,
  isPresetValidSelector,
};
