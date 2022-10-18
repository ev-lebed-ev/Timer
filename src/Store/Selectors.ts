import { Selector } from "react-redux";
import { createPropertySelector } from "./Utils/CreatePropertySelector";
import { Preset, State } from "./State";
import { createSelector } from "reselect";
import { createSimpleSelector } from "./Reducers/CreateSimpleSelector";
import { isPresetValid } from "./Utils/IsPresetValid";
import { makeNonNilable } from "../Utils/MakeNonNilable";
import { generateNames } from "./Utils/GenerateNames";

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
  (iteration) => Math.floor(iteration / 2),
);

const currentIntervalNameSelector: AppSelector<string> = (state) => {
  const currentInterval = currentIntervalSelector(state);

  return makeNonNilable(nameSelector(currentInterval)(state), "Current interval name");
};

const isWorkingSelector = createSimpleSelector(
  iterationSelector,
  (iteration) => iteration % 2 == 0,
);

const currentInitialLeftSelector: AppSelector<number> = (state) => {
  const isWorking = isWorkingSelector(state);

  if (isWorking) {
    return workSelector(state);
  }

  return restSelector(state);
};

const nextInitialLeftSelector: AppSelector<number> = (state) => {
  const isWorking = isWorkingSelector(state);

  if (isWorking) {
    return restSelector(state);
  }

  return workSelector(state);
};

const countdownSelector = createPropertySelector(
  stateSelector,
  ["countdown"],
);

const isCountingDownSelector = createSimpleSelector(
  countdownSelector,
  (countdown) => countdown > 0,
);

const haveCustomNamesSelector = createSelector(
  namesSelector,
  (names) => {
    const generatedNames = generateNames(names.length);

    return names.some((name, index) => name !== generatedNames[index]);
  },
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
  currentIntervalNameSelector,
  haveCustomNamesSelector,
  currentInitialLeftSelector,
  nextInitialLeftSelector,
};
