import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Trello({ list }) {

    return (
        <div className="trello">
            <h2>Phone Features</h2>
            {list.map((l, index) => (
                <ul key={index}>
                    <li>{l}</li>
                </ul>
            ))}
            <h4>Add a Card...</h4>
        </div>
    )
}

const list = [
    "Subflower",
    "Non-pourous, washable",
    "Wings",
    "Beveled Bezei",
    "Bezeled Bezei",
    "Seddiess"
]

ReactDOM.render(<Trello list={list} />, document.getElementById('root'));
