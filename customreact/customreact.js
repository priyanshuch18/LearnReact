

// function customRender(reactElement,container){
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('href',reactElement.props.target)
//     container.appendChild(domElement)
// }


function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type : 'a',
    props: {
        href : 'https//google.com',
        target: '__blank'
    },
    children: 'click to visit google'
}
const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)
