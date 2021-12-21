import React from "react";
import ReactDOM from "react-dom";
import { FeedbackProvider } from "./context/FeedbackContext";
import "./index.css";

import App from "./App";

ReactDOM.render(
    <FeedbackProvider>
        <App />
    </FeedbackProvider>,
    document.getElementById("root")
);
