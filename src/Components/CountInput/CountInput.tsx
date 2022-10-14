import { memo } from "react";
import { countSelector } from "../../Store/Selectors";
import { NumberInput } from "../NumberInput/NumberInput";
import { countUpdatedAction } from "../../Store/Actions";

const CountInput = memo(() => (
  <NumberInput selector={countSelector} action={countUpdatedAction} />
));
CountInput.displayName = "CountInput";

export { CountInput };
