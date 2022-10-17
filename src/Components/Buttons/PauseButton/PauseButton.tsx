import { memo } from "react";
import { useAction } from "../../../Hooks/UseAction";
import { pausedAction } from "../../../Store/Actions";
import { Button } from "../Button/Button";

const PauseButton = memo(() => {
  const pause = useAction(pausedAction);

  return (
    <Button onClick={pause}>
      {"Pause"}
    </Button>
  );
});
PauseButton.displayName = "PauseButton";

export { PauseButton };
