import { ComponentType, createElement, memo, useEffect } from "react";
import classes from "./App.css";
import { useAction } from "../../Hooks/UseAction";
import { appMountedAction } from "../../Store/Actions";
import { Layout } from "../../Store/State";
import { CreatingLayout } from "../Layouts/CreatingLayout/CreatingLayout";
import { FinishedLayout } from "../Layouts/FinishedLayout/FinishedLayout";
import { useSelector } from "react-redux";
import { layoutSelector } from "../../Store/Selectors";
import { WaitingLayout } from "../Layouts/WaitingLayout/WaitingLayout";
import { StartedLayout } from "../Layouts/StartedLayout/StartedLayout";

const layouts: Record<Layout, ComponentType> = {
  "Creating": CreatingLayout,
  "Waiting": WaitingLayout,
  "Started": StartedLayout,
  "Finished": FinishedLayout,
};

const App = memo(() => {
  const layout = useSelector(layoutSelector);

  const onMount = useAction(appMountedAction);

  useEffect(onMount, []);

  return (
    <div className={classes.app}>
      {createElement(layouts[layout])}
    </div>
  );
});
App.displayName = "App";

export { App };
