import React from "react";
import Card from "./Card.jsx";
import emojipedia from "../emojipedia.js";

function createCard(props) {
  return (
    <Card
      id={props.id}
      key={props.id}
      name={props.name}
      emoji={props.emoji}
      meaning={props.meaning}
    />
  );
}

function App() {
  return (
    <>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </>
  );
}

export default App;
