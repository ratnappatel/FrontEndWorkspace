import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Stopwatch from "./Stopwatch";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Stopwatch />
  </StrictMode>,
  rootElement
);
