import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// For relevant time of listings on show page
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
JavascriptTimeAgo.locale(en)



ReactDOM.render(<App />, document.querySelector("#root"));
