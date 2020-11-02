import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import './index.css'

// function Comment({ author, message, likes }) {
//     return (
//         <div>
//             <div className="author">{author}</div>
//             <div className="message">{message}</div>
//             <div className="likes">
//                 {likes > 0 ? likes : 'No'} likes
//             </div>

//         </div>
//     )
// }

// Comment.propTypes = {
//     author: PropTypes.string.isRequired,
//     message: PropTypes.string.isRequired,
//     likes: PropTypes.number
// }


// A custom validator to check that the passed prop is exactly length 3 (either a string or an array)

function customValidator(props, propName, ComponentName) {
    if (props[propName].length !== 3) {
        return new Error(
            `Invalid prop ${propName} Supplied to ${ComponentName} Length is not 3`
        )
    }
}

const CustomTest = ({ myCustomProp }) => {
    return (
        <div>
            {myCustomProp}
        </div>
    )
}

CustomTest.propTypes = {
    myCustomProp: customValidator
}

// ReactDOM.render(<CustomTest myCustomProp={[1, 2, 3]} />, document.getElementById("root"))
ReactDOM.render(<CustomTest myCustomProp="abc" />, document.getElementById("root"))


// ReactDOM.render(<Comment author='an_error' message="Something Strange" likes={15} />, document.getElementById("root"));