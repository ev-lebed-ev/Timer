import { ExplicitAny } from "./ExplicitAny";

const defer = <F extends (...args: Array<ExplicitAny>) => ExplicitAny>(func: F, ...args: Parameters<F>) => () => func(...args);

export { defer };
