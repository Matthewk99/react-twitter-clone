import React from 'react';
import './tweet.css';

const Tweet = (props) => {
    return (
        <div className="tweet-wrapper">
            <p>{props.tweet.username}</p>
            <p>{props.tweet.content}</p>
            <div>
                <p>{props.tweet.likes}</p>
                <button onClick={() => props.updateTweet(props.tweet.uuid)}>Like</button>
            </div>
        </div>
    )
}

export default Tweet;