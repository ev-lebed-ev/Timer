import { ExplicitAny } from "./ExplicitAny";
import { Nil } from "./Nil";

const isNil = (value: ExplicitAny): value is Nil => value === null || value === undefined;

export { isNil };
