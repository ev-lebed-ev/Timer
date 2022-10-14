import { memo } from "react";
import { EditPresetButton } from "../EditPresetButton/EditPresetButton";
import { ActivateButton } from "../ActivateButton/ActivateButton";

const WaitingLayout = memo(() => (
  <div>
      <EditPresetButton />

      <ActivateButton />
  </div>
));
WaitingLayout.displayName = "WaitingLayout";

export { WaitingLayout };
