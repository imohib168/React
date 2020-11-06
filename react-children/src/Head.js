import React from 'react'

function Head({ number, children }) {
    let items = React.Children.toArray(children);
    return (
        <div>
            {items.splice(0,number)}
        </div>
    )
}

export default Head
