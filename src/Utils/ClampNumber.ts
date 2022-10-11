import { makeNonNilable } from "./MakeNonNilable";
import { Nilable } from "./Nilable";
import { isNil } from "./IsNil";

const clampNumber = (value: number, min: Nilable<number>, max: Nilable<number>): number => {
  if (isNil(min) && isNil(max)) {
    throw new Error("At least min or mar must be specified but both is nil");
  }

  if (isNil(max)) {
    const nonNilableMin = makeNonNilable(min, "Min value");

    return value < nonNilableMin
      ? nonNilableMin
      : value;
  }

  if (isNil(min)) {
    const nonNilableMax = makeNonNilable(max, "Max value");

    return value > nonNilableMax
      ? nonNilableMax
      : value;
  }

  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
};

export { clampNumber };
