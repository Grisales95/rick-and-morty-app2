import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import SwitchProvider from "./store/SwitchProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SwitchProvider>
      <App />
    </SwitchProvider>
  </StrictMode>,

  rootElement
);
