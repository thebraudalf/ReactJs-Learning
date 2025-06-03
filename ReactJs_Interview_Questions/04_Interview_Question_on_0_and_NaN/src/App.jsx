import { useState } from "react";
import "./App.css";

function App() {
  // if we get 0 in our state
  const [isLoggedIn, setIsLoggedIn] = useState(NaN);

  // if we get NaN in our state
  //const [isLoggedIn, setIsLoggedIn] = useState(NaN);

  return (
    <div>
      <h1>This is the test heading</h1>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>

      {/*
      // we can get 0 or NaN in state specially in with && operator 
      <div>
        <h3>&& operators</h3>
        {isLoggedIn && <p>This is the test paragraph</p>}
      </div>

      <div>
        <h3>Ternary Operator</h3>
        {isLoggedIn ? <p>This is the test paragraph</p> : "Please Login"}
      </div> 
      */}

      {/* we can solve this error by using !! logical operator */}
      <div>
        <h3>&& operators</h3>
        {!!isLoggedIn && <p>This is the test paragraph</p>}
      </div>

      <div>
        <h3>Ternary Operator</h3>
        {!!isLoggedIn ? <p>This is the test paragraph</p> : "Please Login"}
      </div>
    </div>
  );
}

export default App;
