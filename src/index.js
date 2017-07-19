import React from "react";
import { render } from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./components/App";

render(<App />, document.getElementById("app"));

registerServiceWorker();
