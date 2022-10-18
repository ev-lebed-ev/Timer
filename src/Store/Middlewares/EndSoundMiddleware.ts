import { createMiddleware } from "./CreateMiddleware";
import { leftUpdatedAction } from "../Actions";
import { leftSelector } from "../Selectors";
import endSound from "../../Assets/Sounds/End.m4a";

const end = new Audio(endSound);

const endSoundMiddleware = createMiddleware(
  [leftUpdatedAction],
  (state) => {
    const left = leftSelector(state);

    if (left === 0) {
      end.play();
    }
  },
);

export { endSoundMiddleware };
