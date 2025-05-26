import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Question: What if we have multiple setter functions to add or less counter?
// Then we have to use callback or promises or to handle previous value because promise came one by one.

function App() {
  const [count, setCount] = useState(15);

  function clickToAdd() {
    // Question
    /*setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)*/

    // Solution
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  function clickToLess() {
    // Question
    /*setCount(count - 1)
    setCount(count - 1)
    setCount(count - 1)
    setCount(count - 1)*/

    // Solution
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Count is {count}</h1>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={clickToAdd}>Click to add count {count}</button>
        <button onClick={clickToLess}>Click to less count {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
