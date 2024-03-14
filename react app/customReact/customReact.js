function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);

    
    domElement.innerText = reactElement.InText;

    
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: "_blank", 
    },
    InText: "click on this link"
};

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);
