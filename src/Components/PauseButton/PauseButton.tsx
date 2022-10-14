import { memo } from "react";
import { useAction } from "../../Hooks/UseAction";
import { pauseAction } from "../../Store/Actions";

const PauseButton = memo(() => {
  const pause = useAction(pauseAction);

  return (
    <button onClick={pause}>
      {"Pause"}
    </button>
  );
});
PauseButton.displayName = "PauseButton";

export { PauseButton };
