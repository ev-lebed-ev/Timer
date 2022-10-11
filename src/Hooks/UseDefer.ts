import { useCallback } from "react";
import { defer } from "../Utils/Defer";

const useDefer: typeof defer = (...args) => useCallback(
  defer(...args),
  args,
);

export { useDefer };
