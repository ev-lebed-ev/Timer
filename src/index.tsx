import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./Components/App/App";
import { store } from "./Store/Store";
import { makeNonNilable } from "./Utils/MakeNonNilable";

createRoot(makeNonNilable(document.getElementById("root"), "React root node")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
