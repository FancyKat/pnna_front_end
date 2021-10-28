import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Main from "./main.js";


// import "./styles/about.css"
import "./styles/reset.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/base.css";





function Entry() {
  return (
  <Main />
  );
}

const root = document.getElementById("root");
ReactDOM.render(<Entry />, root);
