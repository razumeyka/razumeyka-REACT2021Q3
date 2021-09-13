import React from "react";
import ReactDom from "react-dom";
import { HashRouter } from "react-router-dom";

import "./assets/main.css";
import App from "./App";

ReactDom.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById("root")
);