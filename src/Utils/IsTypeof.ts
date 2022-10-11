import { ExplicitAny } from "./ExplicitAny";

const isTypeof = <T>(type: "number" | "string" | "boolean" | "object") => (value: ExplicitAny): value is T => typeof value === type;

export { isTypeof };