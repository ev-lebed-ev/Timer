import { memo } from "react";
import { useAction } from "../../../Hooks/UseAction";
import { restartedAction } from "../../../Store/Actions";
import { Button } from "../Button/Button";

const RestartButton = memo(() => {
  const restart = useAction(restartedAction);

  return (
    <Button onClick={restart}>
      {"Restart"}
    </Button>
  );
});
RestartButton.displayName = "RestartButton";

export { RestartButton };
