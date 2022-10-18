import { memo } from "react";
import { useAction } from "../../../Hooks/UseAction";
import { resumedAction } from "../../../Store/Actions";
import { Button } from "../Button/Button";

const ResumeButton = memo(() => {
  const resume = useAction(resumedAction);

  return (
    <Button onClick={resume}>
      {"Resume"}
    </Button>
  );
});
ResumeButton.displayName = "ResumeButton";

export { ResumeButton };
