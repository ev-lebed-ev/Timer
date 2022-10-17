import { ComponentType, createElement, memo, useEffect } from "react";
import classes from "./App.css";
import { useAction } from "../../Hooks/UseAction";
import { appMountedAction } from "../../Store/Actions";
import { Status } from "../../Store/State";
import { CreatingLayout } from "../Layouts/CreatingLayout/CreatingLayout";
import { NoopLayout } from "../Layouts/NoopLayout/NoopLayout";
import { useSelector } from "react-redux";
import { statusSelector } from "../../Store/Selectors";
import { WaitingLayout } from "../Layouts/WaitingLayout/WaitingLayout";
import { StartedLayout } from "../Layouts/StartedLayout/StartedLayout";

const layouts: Record<Status, ComponentType> = {
  "Creating": CreatingLayout,
  "Waiting": WaitingLayout,
  "Started": StartedLayout,
  "Paused": StartedLayout,
  "Finished": NoopLayout,
};

const App = memo(() => {
  const status = useSelector(statusSelector);

  const onMount = useAction(appMountedAction);

  useEffect(onMount, []);

  return (
    <div className={classes.app}>
      {createElement(layouts[status])}
    </div>
  );
});
App.displayName = "App";

export { App };
