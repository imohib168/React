import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'

function Time({ time }) {
    const timeString = Moment(time).fromNow();
    return (
        <div className="time">
            {timeString}
        </div>
    )
}

Time.propTypes = {
    time: PropTypes.string.isRequired
}

export default Time
