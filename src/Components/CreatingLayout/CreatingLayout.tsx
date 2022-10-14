import { memo } from "react";
import { WorkInput } from "../WorkInput/WorkInput";
import { RestInput } from "../RestInput/RestInput";
import { CountInput } from "../CountInput/CountInput";
import { NameInputs } from "../NameInputs/NameInputs";
import { CreatePresetButton } from "../CreatePresetButton/CreatePresetButton";

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
