import { Selector } from "react-redux";
import { createPropertySelector } from "./Utils/CreatePropertySelector";
import { Preset, State, Status } from "./State";
import { createSelector } from "reselect";
import { createSimpleSelector } from "./Utils/CreateSimpleSelector";
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

const namesCountSelector = createPropertySelector(
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

const isPresetValidSelector = createSelector(
  presetSelector,
  isPresetValid,
);

const leftSelector = createPropertySelector(
  stateSelector,
  ["left"],
);

const iterationSelector = createPropertySelector(
  stateSelector,
  ["iteration"],
);

const isWorkingSelector = createSimpleSelector(
  iterationSelector,
  (iteration) => iteration % 2 == 0,
);

const isRestingSelector = createSimpleSelector(
  isWorkingSelector,
  (isWorking)=> !isWorking,
);

export type { AppSelector };
export {
  workSelector,
  restSelector,
  namesCountSelector,
  presetSelector,
  namesSelector,
  nameSelector,
  statusSelector,
  isPresetValidSelector,
  leftSelector,
  isWorkingSelector,
  isRestingSelector,
  iterationSelector,
};
