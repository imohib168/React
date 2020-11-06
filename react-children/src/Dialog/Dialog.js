import React from 'react'

import './Dialog.css'

function Dialog() {
    const title = (<p className="p1">This is Important</p>)
    const body = (<p className="p2">Here is some important Text or Error or Something</p>)
    const footer = (<div> <button>Cancel</button> </div>)
    return (
        <div className="Container">
            <div className="title">
                <Title title={title} /> <br />
            </div>
            <div className="body">
                <Body body={body} /> <br />
            </div>
            <div className="footer">
                <Footer footer={footer} />
            </div>
        </div>
    )
}


const Title = ({ title }) => {
    return (
        <div>
            {title}
        </div>
    )
}

const Body = ({ body }) => {
    return (
        <div>
            {body}
        </div>
    )
}

const Footer = ({ footer }) => {
    return (
        <div>
            {footer}
        </div>
    )
}

export default Dialog
