import React from 'react'
import moment from 'moment';

function Time({ time }) {
    return (
        <div className="time">
            {moment(time).fromNow()}
        </div>
    )
}

export default Time
