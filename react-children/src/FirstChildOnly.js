import React from 'react'

function FirstChildOnly({ children }) {
    let items = React.Children.toArray(children)
    return (
        <div>
            {items[0]}
        </div>
    )
}

export default FirstChildOnly;
