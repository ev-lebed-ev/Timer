import { memo } from "react";
import { useAction } from "../../../Hooks/UseAction";
import { startedAction } from "../../../Store/Actions";
import { Button } from "../Button/Button";

const StartButton = memo(() => {
  const start = useAction(startedAction);

  return (
    <Button onClick={start}>
      {"Start"}
    </Button>
  );
});
StartButton.displayName = "StartButton";

export { StartButton };
