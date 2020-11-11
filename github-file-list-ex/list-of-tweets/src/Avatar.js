import React from 'react'

function Avatar({ hash }) {
    const url = `https://www.gravatar.com/avatar/${hash}`;
    return (
        <img className="avatar" src={url} alt="avatar"/>
    )
}

export default Avatar
