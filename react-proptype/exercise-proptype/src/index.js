import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types'

import './index.css'

function AddressLabel({ person: { name, address, street } }) {
    return (
        <div>
            {name} <br />
            {address} <br />
            {street}
        </div>
    )
}

let person = {
    name: "Mohib Ismail",
    address: "123, Fake Street",
    street: "Boston, MA 02118",
}

AddressLabel.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired
    }).isRequired
}

function Envelope({ toPerson, fromPerson }) {
    return (
        <div className="container">
            <div className="sender">
                <AddressLabel person={person} />
                <div className="stamp">
                    <h2>Stamp</h2>
                </div>
            </div>

            <div className="reciever">
                Mrs. Reciever <br />
                {fromPerson} <br />
                {toPerson}
            </div>
        </div>
    )
}

// ReactDOM.render(<AddressLabel person={person} />, document.getElementById("root"))
ReactDOM.render(<Envelope toPerson="San Francisco, CA 94101" fromPerson={person.address} />, document.getElementById("root"))