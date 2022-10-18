import { ExplicitAny } from "../../Utils/ExplicitAny";

type Action<P extends ExplicitAny = ExplicitAny> = {
  type: string;
  payload: P;
};

type ActionCreator<A extends Array<ExplicitAny> = Array<ExplicitAny>, P extends ExplicitAny = ExplicitAny> = (...args: A) => Action<P>;


export type { Action, ActionCreator };
