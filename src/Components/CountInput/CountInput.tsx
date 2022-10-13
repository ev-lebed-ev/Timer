import { memo } from "react";
import { countSelector } from "../../Store/Selectors";
import { NumberInput } from "../NumberInput/NumberInput";
import { countUpdatedAction } from "../../Store/Actions";

const CountInput = memo(() => (
  <NumberInput valueSelector={countSelector} updateValueActionCreator={countUpdatedAction} />
));
CountInput.displayName = "CountInput";

export { CountInput };
