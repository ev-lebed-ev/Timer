import { ExplicitAny } from "../../Utils/ExplicitAny";
import { ActionCreator } from "./ActionCreator";

const createActionCreator = <A extends Array<ExplicitAny> = Array<ExplicitAny>, P extends ExplicitAny = null>(
  type: string,
  actionCreator: (...args: A) => P = () => null as P,
): ActionCreator<A, P> => (...args: A) => ({
  type,
  payload: actionCreator(...args),
});

export { createActionCreator };
