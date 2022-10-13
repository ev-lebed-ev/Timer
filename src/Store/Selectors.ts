import { Selector } from "react-redux";
import { createPropertySelector } from "./Utils/CreatePropertySelector";
import { State } from "./State";

const stateSelector: Selector<State, State> = (state) => state;

const workSelector = createPropertySelector(
  stateSelector,
  ["work"],
);

const restSelector = createPropertySelector(
  stateSelector,
  ["rest"],
);

const countSelector = createPropertySelector(
  stateSelector,
  ["count"],
);

export { workSelector, restSelector, countSelector };
