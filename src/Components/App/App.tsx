import { memo } from "react";
import classes from "./App.css";

const App = memo(() => {
  console.log("App");

  return (
    <div className={classes.app}>
      {"App"}
    </div>
  );
});
App.displayName = "App";

export { App };
