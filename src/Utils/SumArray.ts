import { ExplicitAny } from "./ExplicitAny";

const sumArray = <T extends ExplicitAny>(array: Array<T>, callback: (item: T, index: number) => number) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += callback(array[i], i);
  }

  return sum;
}

export { sumArray };
