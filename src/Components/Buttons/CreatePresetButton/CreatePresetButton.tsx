import { memo } from "react";
import { useAction } from "../../../Hooks/UseAction";
import { presetCreatedAction } from "../../../Store/Actions";
import { Button } from "../Button/Button";

const CreatePresetButton = memo(() => {
  const createPreset = useAction(presetCreatedAction);

  return (
    <Button onClick={createPreset}>
      {"Create"}
    </Button>
  );
});
CreatePresetButton.displayName = "PresetCreatedButton";

export { CreatePresetButton };
