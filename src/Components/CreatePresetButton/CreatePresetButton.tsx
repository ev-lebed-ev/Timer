import { memo } from "react";
import { useAction } from "../../Hooks/UseAction";
import { presetCreatedAction } from "../../Store/Actions";

const CreatePresetButton = memo(() => {
  const createPreset = useAction(presetCreatedAction);

  return (
    <button onClick={createPreset}>
      {"Create"}
    </button>
  );
});
CreatePresetButton.displayName = "PresetCreatedButton";

export { CreatePresetButton };
