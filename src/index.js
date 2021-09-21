import _ from 'lodash';
import "./style.css"

function test(){
    const el = document.createElement("p") 
    el.innerText = "Hello World"
    return el
}

document.body.appendChild(test())