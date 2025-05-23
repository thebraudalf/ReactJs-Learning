//// Creating custom render functionality
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// function to render app
function NewApp() {
  return (
    <div>
      <h1>Render worked properly through NewApp</h1>
    </div>
  );
}

/// Approach to create custom react render via DOM which doesn't work for react render

// custom react element which works
const anotherElement = (
  <a href="https://meta.com/in" target="_blank">Click to visit link</a>
)

// creating element of react
const reactElement = React.createElement(
  "a",
  { href: "https://meta.com/in", target: "_blank" },
  "Click to visit link"
);

/// Approach to create custom react render via DOM which doesn't work for react render

// custom react element which doesn't works
/*const reactElement = {
    type: 'a',
    props: {
        href: "https://meta.com/in",
        target: "_blank"
    },
    children: 'Click to visit link'
}
    
// function to render html to browser
function customRender(reactElement, container) {

    // setting attribute manully approach
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    // setting attribute with the help of loop approach
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}*/

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <NewApp />
    {reactElement}
  </>

  // we can also call function without like tag but it doesn't recommend
  //NewApp()
);
