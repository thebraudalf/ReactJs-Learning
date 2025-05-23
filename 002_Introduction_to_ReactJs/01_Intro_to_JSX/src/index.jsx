import React from "react";
import { render } from "react-dom";
import Test from "./Test.jsx";

const container = document.getElementById('root');
render(
    <React.StrictMode>
     <Test />
     </React.StrictMode>,
     container
)
