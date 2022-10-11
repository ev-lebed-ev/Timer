import { isNil } from "./IsNil";

const makeNonNilable = <T>(value: T, name: string): NonNullable<T> => {
  if (isNil(value)) {
    throw new Error(`${name} is nil`);
  }

  return value as NonNullable<T>;
};

export { makeNonNilable };
