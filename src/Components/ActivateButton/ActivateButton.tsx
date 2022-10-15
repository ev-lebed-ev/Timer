import { memo } from "react";
import { useAction } from "../../Hooks/UseAction";
import { activatedAction } from "../../Store/Actions";
import { Button } from "../Button/Button";

const ActivateButton = memo(() => {
  const activate = useAction(activatedAction);

  return (
    <Button onClick={activate}>
      {"Activate"}
    </Button>
  );
});
ActivateButton.displayName = "ActivateButton";

export { ActivateButton };
