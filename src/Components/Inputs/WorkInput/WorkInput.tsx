import { memo } from "react";
import { workSelector } from "../../../Store/Selectors";
import { NumberInput } from "../NumberInput/NumberInput";
import { workUpdatedAction } from "../../../Store/Actions";

const WorkInput = memo(() => (
  <NumberInput selector={workSelector} action={workUpdatedAction} />
));
WorkInput.displayName = "WorkInput";

export { WorkInput };
