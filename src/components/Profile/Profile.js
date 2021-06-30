import React from 'react';
import { Link } from 'react-router-dom';

import Tweet from '../Tweet/Tweet';

const Profile = (props) => {
    const userLikedTweets = props.tweets.filter(tweet => props.user.likedTweets.includes(tweet.uuid));

    return (
        <div>
            <h3>{props.user.username}</h3>
            <p>{props.user.bio}</p>
            <p>Liked Tweets:</p>
            {userLikedTweets.length > 0 ?
                    userLikedTweets.map(tweet => 
                        <Tweet tweet={tweet} updateTweet={props.updateTweet} />)
                :
                    <p>Like some tweets to see them here!</p>
            }
            <Link to="/profile/edit">Edit Profile</Link>
        </div>
    )
}

export default Profile;