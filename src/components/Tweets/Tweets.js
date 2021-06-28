import React from 'react';
import Tweet from '../Tweet/Tweet';

const Tweets = (props) => {
    return (
        <div>
          { props.tweets.map(tweet =>
            <Tweet tweet={tweet} key={tweet.uuid} updateTweet={props.updateTweet} />
          )}
        </div>
    )
}

export default Tweets;