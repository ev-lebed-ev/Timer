import { Selector } from "react-redux";
import { createPropertySelector } from "./Utils/CreatePropertySelector";
import { Preset, State } from "./State";
import { createSelector } from "reselect";
import { createSimpleSelector } from "./Reducers/CreateSimpleSelector";
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

const layoutSelector = createPropertySelector(
  stateSelector,
  ["layout"],
);

const isPausedSelector = createPropertySelector(
  stateSelector,
  ["paused"],
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

const currentIntervalSelector = createSimpleSelector(
  iterationSelector,
  (iteration) => Math.floor(iteration / 2 + 1),
);

const isWorkingSelector = createSimpleSelector(
  iterationSelector,
  (iteration) => iteration % 2 == 0,
);

const countdownSelector = createPropertySelector(
  stateSelector,
  ["countdown"],
);

const isCountingDownSelector = createSimpleSelector(
  countdownSelector,
  (countdown) => countdown > 0,
);

export type { AppSelector };
export {
  workSelector,
  restSelector,
  namesCountSelector,
  presetSelector,
  namesSelector,
  nameSelector,
  layoutSelector,
  isPresetValidSelector,
  leftSelector,
  isWorkingSelector,
  iterationSelector,
  isPausedSelector,
  countdownSelector,
  isCountingDownSelector,
  currentIntervalSelector,
};
