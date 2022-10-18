import { createRootMiddleware } from "./CreateRootMiddleware";
import { initializeMiddleware } from "./InitializeMiddleware";
import { countdownSoundMiddleware } from "./CountdownSoundMiddleware";
import { intervalSoundsMiddleware } from "./IntervalSoundsMiddleware";
import { endSoundMiddleware } from "./EndSoundMiddleware";

const rootMiddleware = createRootMiddleware(
  initializeMiddleware,
  countdownSoundMiddleware,
  intervalSoundsMiddleware,
  endSoundMiddleware,
);

export { rootMiddleware };
