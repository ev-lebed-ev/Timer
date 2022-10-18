import { memo } from "react";
import { useSelector } from "react-redux";
import {
  countdownSelector,
  currentIntervalNameSelector,
  currentIntervalSelector,
  haveCustomNamesSelector,
  isCountingDownSelector,
  isPausedSelector,
  isWorkingSelector,
  iterationSelector,
  leftSelector,
  namesCountSelector
} from "../../../Store/Selectors";
import { useAction } from "../../../Hooks/UseAction";
import { countdownUpdatedAction, leftUpdatedAction } from "../../../Store/Actions";
import { PauseResumeButton } from "../../Buttons/PauseResumeButton/PauseResumeButton";
import { useTimer } from "../../../Hooks/UseTimer";

const Interval = memo(() => {
  const iteration = useSelector(iterationSelector);
  const paused = useSelector(isPausedSelector);
  const left = useSelector(leftSelector);
  const isWorking = useSelector(isWorkingSelector);

  const updateLeft = useAction(leftUpdatedAction);

  useTimer(!paused, updateLeft, [iteration]);

  return (
    <div>
      <div>{isWorking ? "Work" : "Rest"}</div>

      <div>{left}</div>
    </div>
  );
});
Interval.displayName = "Interval";

const Countdown = memo(() => {
  const countdown = useSelector(countdownSelector);

  const updateCountdown = useAction(countdownUpdatedAction);

  useTimer(true, updateCountdown, []);

  return (
    <div>
      <div>{"Countdown"}</div>

      <div>{countdown}</div>
    </div>
  );
});
Countdown.displayName = "Countdown";

const CurrentIntervalName = memo(() => {
  const currentIntervalName = useSelector(currentIntervalNameSelector);

  return <div>{currentIntervalName}</div>;
});
CurrentIntervalName.displayName = "CurrentIntervalName";

const StartedLayout = memo(() => {
  const isCountingDown = useSelector(isCountingDownSelector);
  const namesCount = useSelector(namesCountSelector);
  const haveCustomNames = useSelector(haveCustomNamesSelector);
  const currentInterval = useSelector(currentIntervalSelector);

  return (
    <div>
      <PauseResumeButton />

      {haveCustomNames && <CurrentIntervalName />}

      <div>{`${currentInterval + 1} | ${namesCount}`}</div>

      {isCountingDown ? <Countdown /> : <Interval />}
    </div>
  )
});
StartedLayout.displayName = "StartedLayout";

export { StartedLayout };
