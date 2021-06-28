import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    return (
        <div>
            <h3>{props.user.username}</h3>
            <p>{props.user.bio}</p>
            <p>Liked Tweets:</p>
            {props.user.likedTweets.length > 0 ?
                    props.user.likedTweets.map(tweet => <p>{tweet.content}</p>)
                :
                    <p>Like some tweets to see them here!</p>
            }
            <Link to="/profile/edit">Edit Profile</Link>
        </div>
    )
}

export default Profile;