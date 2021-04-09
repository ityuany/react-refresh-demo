import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import ClassComponent from "./ClassComponent";
import "antd/dist/antd.css";
render(
  <>
    <Hello />
    {/* <ClassComponent /> */}
  </>,
  document.querySelector("#app")
);
