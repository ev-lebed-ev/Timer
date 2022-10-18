import { memo } from "react";
import { RestartButton } from "../../Buttons/RestartButton/RestartButton";

const FinishedLayout = memo(() => (
  <div>
    <RestartButton />
  </div>
));
FinishedLayout.displayName = "FinishedLayout";

export { FinishedLayout };
