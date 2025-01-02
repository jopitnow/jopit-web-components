import React from "react";
import ReactDOM from "react-dom";
import {ErrorScreen} from "../src";

const App = () => (
    <ErrorScreen/>
);

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(<App />, document.getElementById("root"));
