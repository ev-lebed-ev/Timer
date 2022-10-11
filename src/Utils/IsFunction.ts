import { ExplicitAny } from "./ExplicitAny";

const isFunction = (value: ExplicitAny): value is (...args: ExplicitAny[]) => ExplicitAny => value && {}.toString.call(value) === "[object Function]";

export { isFunction };
