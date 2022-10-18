import { Nilable } from "../Utils/Nilable";
import { generateNames } from "./Utils/GenerateNames";

type Layout = "Creating" | "Waiting" | "Started" | "Finished";

type Preset = {
  work: number;
  rest: number;
  names: Array<Nilable<string>>;
}

type State = Preset & {
  layout: Layout;
  iteration: number;
  left: number;
  countdown: number;
  paused: boolean;
};

const COUNTDOWN_TIME = 3;
const INTERVAL_PART_TIME = 5;

const initialState: State = {
  layout: "Creating",
  work: 45,
  rest: 15,
  names: generateNames(3),
  iteration: 0,
  left: 0,
  countdown: COUNTDOWN_TIME,
  paused: false,
};

export type { Layout, Preset, State };
export { COUNTDOWN_TIME,INTERVAL_PART_TIME, initialState };
