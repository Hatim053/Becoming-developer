function customRender(customElement) {
    const reactElement = document.createElement(`${customElement.type}`);
    reactElement.innerText = customElement.children;
    for(const key in customElement.props) {
        reactElement.setAttribute(key , customElement.props[key]);
    }
    document.getElementById('root').appendChild(reactElement);
}




const customElement = {
    type : 'a',
    props : {
        'href' : 'https://www.google.com',
        'target' : '_blank',
    },
    children : 'Habibi Come To Dubai'
}

customRender(customElement);