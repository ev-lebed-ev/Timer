import { memo } from "react";
import { namesCountSelector } from "../../../Store/Selectors";
import { NumberInput } from "../NumberInput/NumberInput";
import { namesCountUpdatedAction } from "../../../Store/Actions";

const CountInput = memo(() => (
  <NumberInput selector={namesCountSelector} action={namesCountUpdatedAction} />
));
CountInput.displayName = "CountInput";

export { CountInput };
