import { Nilable } from "../Utils/Nilable";

type Status = "Creating" | "Waiting" | "Active" | "Paused" | "Finished";

type Preset = {
  work: number;
  rest: number;
  names: Array<Nilable<string>>;
}

type State = Preset & {
  status: Status;
  current: number;
};

const state: State = {
  status: "Creating",
  work: 45,
  rest: 15,
  current: 0,
  names: new Array(3).fill(null),
};

export type { Status, Preset, State };
export { state };
