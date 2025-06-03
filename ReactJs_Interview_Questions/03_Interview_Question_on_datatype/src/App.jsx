import { useState } from "react";
import "./App.css";

function App() {
  console.log("App rendered", Math.random());

  //const [value, setValue] = useState(1)
  const [value, setValue] = useState({
    value: 0,
  });

  const clickMe = () => {
    // Integers or Primitive datatypes can not be re-render if same value is given
    //setValue(1)

    // Objects or Non-Primitive datatypes can be re-render if same value is given
    setValue({
      value: 0,
    });

    //console.log("logged");
  };

  return (
    <>
      <h1>Main Value: {value.value}</h1>
      <button onClick={clickMe}>Click to get value</button>
    </>
  );
}

export default App;
