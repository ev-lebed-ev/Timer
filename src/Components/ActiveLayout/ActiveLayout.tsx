import { memo } from "react";
import { PauseButton } from "../PauseButton/PauseButton";

const ActiveLayout = memo(() => (
  <div>
    <PauseButton />
  </div>
));
ActiveLayout.displayName = "ActiveLayout";

export { ActiveLayout };
