import { memo } from "react";
import { useAction } from "../../Hooks/UseAction";
import { activatedAction } from "../../Store/Actions";

const ActivateButton = memo(() => {
  const activate = useAction(activatedAction);

  return (
    <button onClick={activate}>
      {"Activate"}
    </button>
  );
});
ActivateButton.displayName = "ActivateButton";

export { ActivateButton };
