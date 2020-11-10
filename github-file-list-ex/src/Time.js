import React from 'react'
import Moment from 'moment'

function Time({ time }) {
    const timeString = Moment(time).fromNow();
    return (
        <div className="time">
            {timeString}
        </div>
    )
}

export default Time
