import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Random Photos</h1>
    <ul>
      <img src="https://picsum.photos/200" className="randomImages" alt="" srcset="" />
      <img src="https://picsum.photos/300" className="randomImages" alt="" srcset="" />
      <img src="https://picsum.photos/400" className="randomImages" alt="" srcset="" />
    </ul>
  </div>,
  document.getElementById("root")
);
