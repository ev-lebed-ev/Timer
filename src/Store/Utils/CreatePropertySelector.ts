import { Selector } from "react-redux";
import { ExplicitAny } from "../../Utils/ExplicitAny";
import { isEmpty } from "../../Utils/IsEmpty";

/* one */
function createPropertySelector<S extends Record<string, ExplicitAny>, R,
  P1 extends keyof R>(selector: Selector<S, R>, propertyPath: [P1]): Selector<S, R[P1]>;

/* two */
function createPropertySelector<S extends Record<string, ExplicitAny>, R,
  P1 extends keyof R,
  P2 extends keyof R[P1]>(selector: Selector<S, R>, propertyPath: [P1, P2]): Selector<S, R[P1][P2]>;

/* three */
function createPropertySelector<S extends Record<string, ExplicitAny>, R,
  P1 extends keyof R,
  P2 extends keyof R[P1],
  P3 extends keyof R[P1][P2]>(selector: Selector<S, R>, propertyPath: [P1, P2, P3]): Selector<S, R[P1][P2][P3]>;

/* four */
function createPropertySelector<S extends Record<string, ExplicitAny>, R,
  P1 extends keyof R,
  P2 extends keyof R[P1],
  P3 extends keyof R[P1][P2],
  P4 extends keyof R[P1][P2][P3]>(selector: Selector<S, R>, propertyPath: [P1, P2, P3, P4]): Selector<S, R[P1][P2][P3][P4]>;

/* five */
function createPropertySelector<S extends Record<string, ExplicitAny>, R,
  P1 extends keyof R,
  P2 extends keyof R[P1],
  P3 extends keyof R[P1][P2],
  P4 extends keyof R[P1][P2][P3],
  P5 extends keyof R[P1][P2][P3][P4]>(selector: Selector<S, R>, propertyPath: [P1, P2, P3, P4, P5]): Selector<S, R[P1][P2][P3][P4][P5]>;

function createPropertySelector<S extends Record<string, ExplicitAny>, R extends Record<string, ExplicitAny>>(
  selector: Selector<S, R>,
  propertyPath: Array<string>,
): (state: S) => R {
  if (isEmpty(propertyPath)) {
    throw new Error("Property path can not be empty");
  }

  return (state) => propertyPath.reduce(
    (curState, key) => curState[key],
    selector(state),
  );
}

export { createPropertySelector };
