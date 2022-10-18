import { createMiddleware } from "./CreateMiddleware";
import { countdownUpdatedAction, resumedAction, startedAction } from "../Actions";
import { countdownSelector } from "../Selectors";
import tickSound from "../../Assets/Sounds/Tick.m4a";
import startSound from "../../Assets/Sounds/Start.m4a";

const tick = new Audio(tickSound);
const start = new Audio(startSound);

const countdownSoundMiddleware = createMiddleware(
  [startedAction, resumedAction, countdownUpdatedAction],
  (state) => {
    const countdown = countdownSelector(state);

    if (countdown > 0) {
      tick.play();

      return;
    }

    start.play();
  },
);

export { countdownSoundMiddleware };
