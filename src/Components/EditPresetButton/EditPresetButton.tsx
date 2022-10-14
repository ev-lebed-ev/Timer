import { memo } from "react";
import { useAction } from "../../Hooks/UseAction";
import { presetEditedAction } from "../../Store/Actions";

const EditPresetButton = memo(() => {
  const editPreset = useAction(presetEditedAction);

  return (
    <button onClick={editPreset}>
      {"Edit"}
    </button>
  );
});
EditPresetButton.displayName = "EditPresetButton";

export { EditPresetButton };
