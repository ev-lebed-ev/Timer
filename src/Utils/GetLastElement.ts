import { ExplicitAny } from "./ExplicitAny";

const getLastElement = <T extends ExplicitAny>(array: Array<T>): T => array[array.length - 1];

export { getLastElement };
