import { memo, useCallback, useEffect, useReducer, useRef, useState } from "react";
import { PauseButton } from "../PauseButton/PauseButton";
import { VoidFunction } from "../../Utils/VoidFunction";
import { useInitializedReducer } from "../../Hooks/UseInitializedReducer";
import { useSelector } from "react-redux";
import { isWorkingSelector, iterationSelector, leftSelector, restSelector, workSelector } from "../../Store/Selectors";
import { useAction } from "../../Hooks/UseAction";
import { leftUpdatedAction } from "../../Store/Actions";

type CounterProps = {
  value: number;
}

const Counter = memo<CounterProps>(({
                                      value,
                                    }) => {
  const left = useSelector(leftSelector);
  const updateLeft = useAction(leftUpdatedAction);

  useEffect(
    () => {
      const intervalId = setInterval(
        updateLeft,
        1000,
      );

      return () => {
        clearInterval(intervalId);
      };
    },
    [],
  );

  return <div>{left}</div>
});
Counter.displayName = "Counter";

const Interval = memo(() => {
  const work = useSelector(workSelector);
  const rest = useSelector(restSelector);
  const iteration = useSelector(iterationSelector);
  const isWorking = useSelector(isWorkingSelector);

  if (isWorking) {
    return <Counter key={iteration} value={work} />
  }

  return <Counter key={iteration} value={rest} />
});
Interval.displayName = "Interval";

const ActiveLayout = memo(() => (
  <div>
    <PauseButton />

    <Interval />
  </div>
));
ActiveLayout.displayName = "ActiveLayout";

export { ActiveLayout };
