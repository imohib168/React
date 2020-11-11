import React from 'react'

function Author({ author: { handle, name } }) {
    return (
        <div className="author">
            <span className="name">
                {name}
            </span>
            <span className="handle">
                {handle}
            </span>
        </div>
    )
}

export default Author
