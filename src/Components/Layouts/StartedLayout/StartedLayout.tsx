import { memo } from "react";
import { useSelector } from "react-redux";
import {
  countdownSelector,
  isCountingDownSelector,
  isPausedSelector,
  iterationSelector,
  leftSelector
} from "../../../Store/Selectors";
import { useAction } from "../../../Hooks/UseAction";
import { countdownUpdatedAction, leftUpdatedAction } from "../../../Store/Actions";
import { PauseResumeButton } from "../../Buttons/PauseResumeButton/PauseResumeButton";
import { useTimer } from "../../../Hooks/UseTimer";

const Interval = memo(() => {
  const iteration = useSelector(iterationSelector);
  const paused = useSelector(isPausedSelector);
  const left = useSelector(leftSelector);

  const updateLeft = useAction(leftUpdatedAction);

  useTimer(!paused, updateLeft, [iteration]);

  return <div>{left}</div>
});
Interval.displayName = "Interval";

const Countdown = memo(() => {
  const countdown = useSelector(countdownSelector);

  const updateCountdown = useAction(countdownUpdatedAction);

  useTimer(true, updateCountdown, []);

  return <div>{countdown}</div>;
});

const StartedLayout = memo(() => {
  const isCountingDown = useSelector(isCountingDownSelector);

  return (
    <div>
      <PauseResumeButton />

      {isCountingDown ? <Countdown /> : <Interval />}
    </div>
  )
});
StartedLayout.displayName = "StartedLayout";

export { StartedLayout };
