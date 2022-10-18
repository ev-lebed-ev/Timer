import { memo } from "react";
import { EditPresetButton } from "../../Buttons/EditPresetButton/EditPresetButton";
import { StartButton } from "../../Buttons/StartButton/StartButton";

const WaitingLayout = memo(() => (
  <div>
    <EditPresetButton />

    <StartButton />
  </div>
));
WaitingLayout.displayName = "WaitingLayout";

export { WaitingLayout };
