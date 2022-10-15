import { Nilable } from "../Utils/Nilable";

type Status = "Creating" | "Waiting" | "Active" | "Paused" | "Finished";

type Preset = {
  work: number;
  rest: number;
  names: Array<Nilable<string>>;
}

type State = Preset & {
  status: Status;
  iteration: number;
  left: number;
};

const state: State = {
  status: "Creating",
  work: 45,
  rest: 15,
  names: new Array(3).fill(null),
  iteration: 0,
  left: 0,
};

export type { Status, Preset, State };
export { state };
