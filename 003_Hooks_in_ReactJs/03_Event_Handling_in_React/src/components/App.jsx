import { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [onMouseOver, setonMouseOver] = useState("white");

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setonMouseOver("black");
  }

  function handleMouseOut() {
    setonMouseOver("white");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: onMouseOver }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
