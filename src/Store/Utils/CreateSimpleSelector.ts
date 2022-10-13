import { Selector } from "react-redux";
import { ExplicitAny } from "../../Utils/ExplicitAny";

/* one */
function createSimpleSelector<S1, R1, T>(
  selector1: Selector<S1, R1>,
  combiner: (result1: R1) => T,
): Selector<S1, T>;

/* two */
function createSimpleSelector<S1, S2, R1, R2, T>(
  selector1: Selector<S1, R1>,
  selector2: Selector<S2, R2>,
  combiner: (result1: R1, result2: R2) => T,
): Selector<S1 & S2, T>;

/* three */
function createSimpleSelector<S1, S2, S3, R1, R2, R3, T>(
  selector1: Selector<S1, R1>,
  selector2: Selector<S2, R2>,
  selector3: Selector<S3, R3>,
  combiner: (result1: R1, result2: R2, result3: R3) => T,
): Selector<S1 & S2 & S3, T>;

/* four */
function createSimpleSelector<S1, S2, S3, S4, R1, R2, R3, R4, T>(
  selector1: Selector<S1, R1>,
  selector2: Selector<S2, R2>,
  selector3: Selector<S3, R3>,
  selector4: Selector<S4, R4>,
  combiner: (result1: R1, result2: R2, result3: R3, result4: R4) => T,
): Selector<S1 & S2 & S3 & S4, T>;

/* five */
function createSimpleSelector<S1, S2, S3, S4, S5, R1, R2, R3, R4, R5, T>(
  selector1: Selector<S1, R1>,
  selector2: Selector<S2, R2>,
  selector3: Selector<S3, R3>,
  selector4: Selector<S4, R4>,
  selector5: Selector<S5, R5>,
  combiner: (result1: R1, result2: R2, result3: R3, result4: R4, result5: R5) => T,
): Selector<S1 & S2 & S3 & S4 & S5, T>;

function createSimpleSelector<S extends (state: ExplicitAny) => ExplicitAny, C extends (...args: Array<ExplicitAny>) => ExplicitAny>(...args: Array<S | C>) {
  const combiner = args.pop() as C;

  return (state: ExplicitAny) => combiner(...(args as Array<S>).reduce(
    (acc, cur) => [...acc, cur(state)],
    [] as Array<ExplicitAny>,
  ));
}

export { createSimpleSelector };
