import { Nilable } from "../Utils/Nilable";
import { generateNames } from "./Utils/GenerateNames";

type Status = "Creating" | "Waiting" | "Started" | "Paused" | "Finished";

type Preset = {
  work: number;
  rest: number;
  names: Array<Nilable<string>>;
}

type State = Preset & {
  status: Status;
  iteration: number;
  left: number;
  countdown: number;
};

const initialState: State = {
  status: "Creating",
  work: 45,
  rest: 15,
  names: generateNames(3),
  iteration: 0,
  left: 0,
  countdown: 10,
};

export type { Status, Preset, State };
export { initialState };
