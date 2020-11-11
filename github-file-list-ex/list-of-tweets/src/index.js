import React from 'react';
import ReactDOM from 'react-dom'

import Tweet from './Tweet'


const TweetList = ({ tweets }) => (
    <div>
        {tweets.map(tweet => (
            <Tweet key={tweet.id} tweet={tweet} />
        ))}
    </div>
)

const Tweets = [
    {
        message: "Something about cats.",
        gravatar: "xyz",
        author: {
            handle: "imohib168",
            name: "Mohib Ismail"
        },
        likes: 2,
        retweets: 17,
        timestamp: "2020-09-30 21:24:37"
    },
    {
        message: "Something about Dogs.",
        gravatar: "xyz",
        author: {
            handle: "imohib168",
            name: "Mohib Ismail"
        },
        likes: 2,
        retweets: 17,
        timestamp: "2020-09-30 21:24:37"

    },
    {
        message: "Something about wolves.",
        gravatar: "xyz",
        author: {
            handle: "imohib168",
            name: "Mohib Ismail"
        },
        likes: 2,
        retweets: 17,
        timestamp: "2020-09-30 21:24:37"
    }
]

ReactDOM.render(<TweetList tweets={Tweets} />, document.getElementById("root"))