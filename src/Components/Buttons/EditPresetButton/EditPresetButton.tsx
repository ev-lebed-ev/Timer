import { memo } from "react";
import { useAction } from "../../../Hooks/UseAction";
import { presetEditedAction } from "../../../Store/Actions";
import { Button } from "../Button/Button";

const EditPresetButton = memo(() => {
  const editPreset = useAction(presetEditedAction);

  return (
    <Button onClick={editPreset}>
      {"Edit"}
    </Button>
  );
});
EditPresetButton.displayName = "EditPresetButton";

export { EditPresetButton };
