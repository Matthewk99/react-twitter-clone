import React, { useState } from 'react';

/*
    Can edit:
        bio
        username(twitter handle)
*/

const Form = (props) => {
    const [ bio, updateBio ] = useState(props.user.bio);
    const [ username, updateUsername ] = useState(props.user.username);

    const onChange = evt => {
        if (evt.target.name === 'bio') {
            updateBio(evt.target.value);
        } else if (evt.target.name === 'username') {
            updateUsername(evt.target.value);
        }
    }

    const reset = (evt) => {
        evt.preventDefault();
        updateBio(props.user.bio);
        updateUsername(props.user.username);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        props.submitEditProfile(bio, username);
    }

    return (
        <div>
            <h3>Edit Form</h3>
            <form onSubmit={onSubmit}>
                <input type="text" name="bio" value={bio} onChange={onChange} />
                <input type="text" name="username" value={username} onChange={onChange} />
                <button>Edit Profile</button>
                <button onClick={props.editProfile}>Cancel</button>
                <button onClick={reset}>Reset</button>
            </form>
        </div>
    )
}

export default Form;