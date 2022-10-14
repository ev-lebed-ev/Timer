import { memo } from "react";
import { ActivateButton } from "../ActivateButton/ActivateButton";

const PausedLayout = memo(() => (
  <div>
    <ActivateButton />
  </div>
));
PausedLayout.displayName = "WaitingLayout";

export { PausedLayout };
