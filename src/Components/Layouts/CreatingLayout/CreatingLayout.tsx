import { memo } from "react";
import { WorkInput } from "../../Inputs/WorkInput/WorkInput";
import { RestInput } from "../../Inputs/RestInput/RestInput";
import { CountInput } from "../../Inputs/CountInput/CountInput";
import { NameInputs } from "../../Inputs/NameInputs/NameInputs";
import { CreatePresetButton } from "../../Buttons/CreatePresetButton/CreatePresetButton";

const CreatingLayout = memo(() => (
  <div>
    <WorkInput />

    <RestInput />

    <CountInput />

    <NameInputs />

    <CreatePresetButton />
  </div>
));
CreatingLayout.displayName = "CreatingLayout";

export { CreatingLayout };
