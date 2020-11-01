import React from 'react';
import ReactDOM from 'react-dom'

import './index.css'

// function App() {
//     const name = "Mohib";
//     const fatherName = "Ismail";

//     return (
//         <div>
//             My Name is {name} {fatherName}
//         </div>
//     )
// }

// Passing props through props

// function App(props) {
//     return (
//         <div>
//             My Name is {props.name} {props.fatherName}
//         </div>
//     )
// }

// passing props through destructuring

function App({ name, fatherName }) {
    return (
        <div>
            My Name is {name} {fatherName}
        </div>
    )
}


// Communicating with parent components

function handleAction(event) {
    console.log(`Child did: ${event}`);
}

function Parent() {
    return (
        <div>
            <Child onAction={handleAction} />
        </div>
    )
}

function Child({ onAction }) {
    return (
        <div>
            <button onClick={onAction}>Send Data</button>
        </div>
    )
}



// ReactDOM.render(<App name="Mohib" fatherName="Ismail" />, document.getElementById("root"))
ReactDOM.render(<Parent />, document.getElementById("root"))