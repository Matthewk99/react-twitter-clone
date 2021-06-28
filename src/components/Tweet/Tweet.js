import React from 'react';

const Tweet = (props) => {
    return (
        <div>
            <p>{props.tweet.username}</p>
            <p>{props.tweet.content}</p>
            <p>{props.tweet.likes}</p>
            <button onClick={() => props.updateTweet(props.tweet.uuid)}>Like</button>
        </div>
    )
}

export default Tweet;