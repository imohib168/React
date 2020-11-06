import React from 'react'

function LastChildOnly({ children }) {
    let items = React.Children.toArray(children)
    return (
        <div>
            {items.splice(-1)}
        </div>
    )
}

export default LastChildOnly;
