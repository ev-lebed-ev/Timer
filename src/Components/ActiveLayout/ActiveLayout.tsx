import { memo, useEffect } from "react";
import { PauseButton } from "../PauseButton/PauseButton";
import { useSelector } from "react-redux";
import { iterationSelector, leftSelector } from "../../Store/Selectors";
import { useAction } from "../../Hooks/UseAction";
import { leftUpdatedAction } from "../../Store/Actions";

const Counter = memo(() => {
  const left = useSelector(leftSelector);
  const updateLeft = useAction(leftUpdatedAction);

  useEffect(
    () => {
      const intervalId = setInterval(
        updateLeft,
        250,
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
  const iteration = useSelector(iterationSelector);

  return <Counter key={iteration}  />
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
