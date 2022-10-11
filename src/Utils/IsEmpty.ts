import { ExplicitAny } from "./ExplicitAny";
import { isArray } from "./IsArray";
import { isString } from "./IsString";
import { isObject } from "./IsObject";

const isEmpty = (value: ExplicitAny): boolean => {
  if (isArray(value) || isString(value)) {
    return value.length === 0;
  }

  if (value instanceof Set || value instanceof Map) {
    return value.size > 0;
  }

  if (isObject(value)) {
    return Object.entries(value).length === 0;
  }

  return false;
};

export { isEmpty };
