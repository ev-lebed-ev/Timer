import { memo } from "react";
import { ResumeButton } from "../ResumeButton/ResumeButton";
import { PauseButton } from "../PauseButton/PauseButton";
import { isPausedSelector } from "../../../Store/Selectors";
import { useSelector } from "react-redux";

const PauseResumeButton = memo(() => {
  const paused = useSelector(isPausedSelector);

  return paused
    ? <ResumeButton />
    : <PauseButton />;
});
PauseResumeButton.displayName = "PauseResumeButton";

export { PauseResumeButton };
