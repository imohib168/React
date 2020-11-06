import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes, { func } from 'prop-types'

import './index.css'


// Q: 01
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

// Q: 02
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
Envelope.propTypes = {
    toPerson: PropTypes.string.isRequired,
    fromPerson: PropTypes.string.isRequired
}

// Q: 03
function CreditCard({ CardInfo: { name, expiration_date, credit_card_number, bank_name } }) {
    return (
        <div className="container-credit-card">
            <div className="bank-name">
                {bank_name} <br />
            </div>

            <div className="credit-card-number">
                {credit_card_number} <br />
            </div>

            <div className="expiration-date">
                VALID TILL <br /> {expiration_date} <br />
            </div>

            <div className="name">
                {name}
            </div>
        </div>
    )
}
let CardInfo = {
    name: "Mohib Ismail",
    expiration_date: "12 / 10 / 2028",
    credit_card_number: "1234 5678 8765 4321",
    bank_name: "Fake Bank",
}
CreditCard.propTypes = {
    CardInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        expiration_date: PropTypes.string.isRequired,
        credit_card_number: PropTypes.string.isRequired,
        bank_name: PropTypes.string.isRequired,
    })
}


// Q: 01
// ReactDOM.render(<AddressLabel person={person} />, document.getElementById("root"))

// Q: 02
// ReactDOM.render(<Envelope toPerson="San Francisco, CA 94101" fromPerson={person.address} />, document.getElementById("root"))

// Q: 03
ReactDOM.render(<CreditCard CardInfo={CardInfo} />, document.getElementById("root"))