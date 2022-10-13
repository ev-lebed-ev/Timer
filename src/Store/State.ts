type Status = "Waiting" | "Processing" | "Paused" | "Finished";

type State = {
  status: Status;
  work: number;
  rest: number;
  count: number;
  current: number;
  names?: Array<string>;
};

const state: State = {
  status: "Waiting",
  work: 45,
  rest: 15,
  count: 30,
  current: 0,
};

export type { State };
export { state };
