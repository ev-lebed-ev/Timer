import { createMiddleware } from "./CreateMiddleware";
import { leftUpdatedAction } from "../Actions";
import tickSound from "../../Assets/Sounds/Tick.m4a";
import startSound from "../../Assets/Sounds/Start.m4a";
import middleSound from "../../Assets/Sounds/Middle.m4a";
import { currentInitialLeftSelector, leftSelector } from "../Selectors";
import { INTERVAL_PART_TIME } from "../State";

const tick = new Audio(tickSound);
const start = new Audio(startSound);
const middle = new Audio(middleSound);

const MIN_TIME_TO_PLAY_INTER_SOUND = INTERVAL_PART_TIME * 2;

const shouldPlayStarted = (initial: number, left: number) => left === initial;

const intervalSoundsMiddleware = createMiddleware(
  [leftUpdatedAction],
  (state) => {
    const initialLeft = currentInitialLeftSelector(state);
    const left = leftSelector(state);

    if (shouldPlayStarted(initialLeft, left)) {
      void start.play();

      return;
    }

    if (initialLeft < MIN_TIME_TO_PLAY_INTER_SOUND || left === 0) {
      return;
    }

    if (left <= INTERVAL_PART_TIME) {
      void tick.play();

      return;
    }

    if (left === Math.floor(initialLeft / 2)) {
      void middle.play();
    }
  },
);

export { intervalSoundsMiddleware };
