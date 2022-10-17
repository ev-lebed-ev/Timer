import { memo } from "react";
import { useAction } from "../../../Hooks/UseAction";
import { startAction } from "../../../Store/Actions";
import { Button } from "../Button/Button";

const StartButton = memo(() => {
  const start = useAction(startAction);

  return (
    <Button onClick={start}>
      {"Start"}
    </Button>
  );
});
StartButton.displayName = "StartButton";

export { StartButton };
