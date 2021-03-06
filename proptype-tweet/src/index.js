import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import moment from 'moment'
import PropType from 'prop-types';

function Tweet({ tweet }) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar} /> <div className="content">
                <Author author={tweet.author} />
                <Time time={tweet.timestamp} />
                <Message message={tweet.message} />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton count={tweet.retweets} />
                    <LikeButton count={tweet.likes} />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}

Tweet.propTypes = {
    tweet: PropType.shape({
        gravatar: PropType.string.isRequired,
        author: PropType.shape({
            name: PropType.string.isRequired,
            handle: PropType.string.isRequired
        }).isRequired,
        message: PropType.string.isRequired,
        retweets: PropType.number.isRequired,
        likes: PropType.number.isRequired
    }).isRequired
}

function Avatar({ hash }) {
    const url = `https://www.gravatar.com/avatar/${hash}`
    return (
        <img
            src={url}
            className="avatar"
            alt="avatar" />
    )
}

Avatar.propTypes = {
    hash: PropType.string.isRequired
}

function Message({ message }) {
    return (
        <div className="message">
            {message}
        </div>
    );
}

Message.propTypes = {
    message: PropType.string.isRequired
}

function Author({ author: { name, handle } }) {
    return (
        <span className="author">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    );
}

Author.propTypes = {
    author: PropType.shape({
        name: PropType.string.isRequired,
        handle: PropType.string.isRequired
    }).isRequired
}

const Time = ({ time }) => (
    <span className="time">{moment(time).fromNow()}</span>
);

Time.propTypes = {
    time: PropType.string.isRequired
}

const ReplyButton = () => (
    <i className="fa fa-reply reply-button" />
);

function getRetweetCount(count) {
    if (count > 0) {
        return (
            <span className="retweet-count">
                {count}
            </span>
        )
    } else {
        return null;
    }
}

const RetweetButton = ({ count }) => (
    <span className="retweet-button">
        <i className="fa fa-retweet" />
        {getRetweetCount(count)}
    </span>
);

RetweetButton.propTypes = {
    count: PropType.number
};

const LikeButton = ({ count }) => (
    <span className="like-button">
        <i className="fa fa-heart" />
        {count > 0 &&
            <span className="like-count">
                {count}
            </span>}
    </span>
);

LikeButton.propTypes = {
    count: PropType.number
};




const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
);


const testTweet = {
    message: "Something about cats.",
    gravatar: "xyz",
    author: {
        handle: "imohib168",
        name: "Mohib Ismail"
    },
    likes: 2,
    retweets: 17,
    timestamp: "2020-09-30 21:24:37"
};


ReactDOM.render(<Tweet tweet={testTweet} />, document.getElementById("root"));