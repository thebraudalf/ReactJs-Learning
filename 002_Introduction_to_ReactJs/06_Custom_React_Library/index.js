/// creating custom render like react jsx render

// function to render html to browser
function customRender(reactElement, container) {

    // setting attribute manully approach
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)*/

    // setting attribute with the help of loop approach
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}

// custom react element
const reactElement = {
    type: 'a',
    props: {
        href: "https://meta.com/in",
        target: "_blank"
    },
    children: 'Click to visit link'
}

// container to get reference to html element id
const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);