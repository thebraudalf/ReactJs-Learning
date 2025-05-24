import React from "react";

// 2nd approach to solve this question
/*function IsUserRegistered(props) {
  if (props.isRegistered === false) {
    return (
      <>
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Register</button>
      </>
    );
  } else {
    return <button type="submit">Login</button>;
  }
}*/

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {/*<IsUserRegistered isRegistered={props.isUserRegistered} />*/}
      {!props.isUserRegistered && <input type="password" placeholder="Confirm Password" />}
      <button type="submit">{props.isUserRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
