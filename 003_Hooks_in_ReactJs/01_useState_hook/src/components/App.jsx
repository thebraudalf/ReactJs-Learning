import React, { useState } from "react";

function App() {
  //repeated code
  /*var count = 0;
    function increase() {
      count++;
      console.log(count);
      ReactDOM.render(
        <div className="container">
          <h1>{count}</h1>
          <button onClick={increase}>+</button>
        </div>,
        document.getElementById("root")
      );
    }*/

  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
