import { ComponentType, createElement, memo, useEffect } from "react";
import classes from "./App.css";
import { useAction } from "../../Hooks/UseAction";
import { appMountedAction } from "../../Store/Actions";
import { Status } from "../../Store/State";
import { CreatingLayout } from "../CreatingLayout/CreatingLayout";
import { NoopLayout } from "../NoopLayout/NoopLayout";
import { useSelector } from "react-redux";
import { statusSelector } from "../../Store/Selectors";
import { WaitingLayout } from "../WaitingLayout/WaitingLayout";
import { PausedLayout } from "../PausedLayout/PausedLayout";
import { ActiveLayout } from "../ActiveLayout/ActiveLayout";

const layouts: Record<Status, ComponentType> = {
  "Creating": CreatingLayout,
  "Waiting": WaitingLayout,
  "Active": ActiveLayout,
  "Paused": PausedLayout,
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
