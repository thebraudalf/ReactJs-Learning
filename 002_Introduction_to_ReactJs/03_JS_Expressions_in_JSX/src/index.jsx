import React from "react";
import ReactDOM from "react-dom";

const name = "User";
ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <h2> Your age is {10 + 9}</h2>
  </div>,
  document.getElementById("root")
);
