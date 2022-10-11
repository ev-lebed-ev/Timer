import { ExplicitAny } from "./ExplicitAny";

const isLastElement = (array: Array<ExplicitAny>, index: number) => index === array.length - 1;

export { isLastElement };
