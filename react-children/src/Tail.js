import React from 'react'

function Tail({ children, number }) {
    let items = React.Children.toArray(children)
    return (
        <div>
            {items.splice(-number)}
        </div>
    )
}

export default Tail
