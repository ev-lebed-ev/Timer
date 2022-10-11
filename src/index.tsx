import { createRoot } from "react-dom/client";
import { App } from "./Components/App/App";
import { makeNonNilable } from "./Utils/MakeNonNilable";

createRoot(makeNonNilable(document.getElementById("root"), "React root node")).render(
    <App />
);
