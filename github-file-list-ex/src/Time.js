import React from 'react'
import Moment from 'moment'
import PropTypes from 'prop-types'

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
};


export default Time
