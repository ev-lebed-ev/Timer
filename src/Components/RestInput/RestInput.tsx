import { memo } from "react";
import { restSelector } from "../../Store/Selectors";
import { NumberInput } from "../NumberInput/NumberInput";
import { restUpdatedAction } from "../../Store/Actions";

const RestInput = memo(() => (
  <NumberInput valueSelector={restSelector} updateValueActionCreator={restUpdatedAction} />
));
RestInput.displayName = "RestInput";

export { RestInput };
