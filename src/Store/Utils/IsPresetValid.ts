import { Preset } from "../State";
import { isNil } from "../../Utils/IsNil";

const isPresetValid = (preset: Preset) => !preset.names.some(isNil);

export { isPresetValid };
