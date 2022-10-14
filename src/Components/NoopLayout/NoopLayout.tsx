import { memo } from "react";
import { WorkInput } from "../WorkInput/WorkInput";
import { RestInput } from "../RestInput/RestInput";
import { CountInput } from "../CountInput/CountInput";
import { NameInputs } from "../NameInputs/NameInputs";
import { CreatePresetButton } from "../CreatePresetButton/CreatePresetButton";

const NoopLayout = memo(() => (
  <div>
      Noop Layout
  </div>
));
NoopLayout.displayName = "NoopLayout";

export { NoopLayout };
