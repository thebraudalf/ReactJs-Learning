import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleOnChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleOnChange}
          value={contact.fName}
        />
        <input name="lName" placeholder="Last Name" onChange={handleOnChange} value={contact.lName} />
        <input name="email" placeholder="Email" onChange={handleOnChange} value={contact.email} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
