import { memo } from "react";
import { WorkInput } from "../../Inputs/WorkInput/WorkInput";
import { RestInput } from "../../Inputs/RestInput/RestInput";
import { CountInput } from "../../Inputs/CountInput/CountInput";
import { NameInputs } from "../../Inputs/NameInputs/NameInputs";
import { CreatePresetButton } from "../../Buttons/CreatePresetButton/CreatePresetButton";

const NoopLayout = memo(() => (
  <div>
      Noop Layout
  </div>
));
NoopLayout.displayName = "NoopLayout";

export { NoopLayout };
