import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  // <BrowserRouter basename="/chat-anonimo">
  //   <App />
  // </BrowserRouter>,
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
