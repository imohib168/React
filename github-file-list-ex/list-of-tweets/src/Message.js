import React from 'react'

function Message({ message }) {
    return (
        <div className="message">
            <div>
                {message}
            </div>
        </div>
    )
}

export default Message
