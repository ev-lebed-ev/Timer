import { memo, useEffect } from "react";
import classes from "./App.css";
import { WorkInput } from "../WorkInput/WorkInput";
import { CountInput } from "../CountInput/CountInput";
import { RestInput } from "../RestInput/RestInput";
import { useAction } from "../../Hooks/UseAction";
import { appMountedAction } from "../../Store/Actions";

const App = memo(() => {
  const onMount = useAction(appMountedAction);

  useEffect(onMount, []);

  console.log("App");

  return (
    <div className={classes.app}>
      <WorkInput />

      <RestInput />

      <CountInput />
    </div>
  );
});
App.displayName = "App";

export { App };
