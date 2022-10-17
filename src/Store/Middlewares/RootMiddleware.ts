import { createRootMiddleware } from "./CreateRootMiddleware";
import { initializeMiddleware } from "./InitializeMiddleware";

const rootMiddleware = createRootMiddleware(
  initializeMiddleware,
);

export { rootMiddleware };
