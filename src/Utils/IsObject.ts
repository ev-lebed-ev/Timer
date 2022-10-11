import { isTypeof } from "./IsTypeof";
import { ExplicitAny } from "./ExplicitAny";

const isObject = (value: ExplicitAny): value is object => value !== null && isTypeof<object>("object")(value);

export { isObject };
