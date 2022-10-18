import { useEffect, useRef } from "react";
import { isNil } from "../Utils/IsNil";
import { ExplicitAny } from "../Utils/ExplicitAny";
import { VoidFunction } from "../Utils/VoidFunction";

const useTimer = (enabled: boolean, callback: VoidFunction, deps: Array<ExplicitAny>) => {
  const intervalIdRef = useRef<ExplicitAny>();

  useEffect(
    () => {
      if (enabled) {
        intervalIdRef.current = setInterval(callback, 1000);
      }

      return () => {
        if (!isNil(intervalIdRef.current)) {
          clearInterval(intervalIdRef.current);
        }
      };
    },
    [enabled, ...deps],
  );
};

export { useTimer };
