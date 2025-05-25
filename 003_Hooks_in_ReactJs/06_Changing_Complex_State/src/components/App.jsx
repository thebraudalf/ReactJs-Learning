import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleOnChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello,{fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
          onChange={handleOnChange}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
          onChange={handleOnChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
