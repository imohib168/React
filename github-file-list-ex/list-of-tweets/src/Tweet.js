import React from 'react'

import Avatar from './Avatar'
import Message from './Message'
import Author from './Author'
import Time from './Time'

import ReplyButton from './Buttons/ReplyButton'
import RetweetButton from './Buttons/RetweetButton'
import LikeButton from './Buttons/LikeButton'
import MoreOptions from './Buttons/MoreOptions'

import './index.css'

function Tweet({ tweet }) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar} />
            <div className="av-au-ti">
                <Author author={tweet.author} />
                <Time time={tweet.timestamp} />
            </div>
            <Message message={tweet.message} />
            <div className="buttons">
                <ReplyButton />
                <RetweetButton count={tweet.retweets} />
                <LikeButton count={tweet.likes} />
                <MoreOptions />
            </div>
        </div>
    )
}

export default Tweet
