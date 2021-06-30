import React, { Component } from 'react';
import './App.css';

import Tweets from './components/Tweets/Tweets';
import CreateTweet from './components/CreateTweet';
import Profile from './components/Profile/Profile';
import Form from './components/Form/Form';

import { Route, Link, withRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: '123456',
        username: "MKirby",
        bio: "This is the bio...",
        likedTweets: []
      },
      tweets: [
        {
          timestamp: Date.now(),
          uuid: "1234567",
          userId: "MKirby",
          content: "This is the tweet's contents.",
          likes: 0
        }
      ],
    }
  }

  createTweet = (tweet) => {

    tweet.timestamp = Date.now();
    tweet.uuid = Math.floor(Math.random() * 100000);
    tweet.userId = "123456";
    tweet.likes = 0;

    const tweets = this.state.tweets;
    
    tweets.push(tweet);

    this.setState({
      tweets
    })

    this.props.history.push("/tweets");
  }

  submitEditProfile = (bio, username) => {
    const user = this.state.user;
    user.bio = bio;
    user.username = username;

    this.setState({
      user,
      editProfile: false
    })

    this.props.history.push("/profile")
  }

  updateTweet = id => {
    const userLikedTweets = this.state.user.likedTweets;

    const tweet = this.state.tweets.map(tweet => {
      if (tweet.uuid === id) {
        if (this.state.user.likedTweets.includes(id)) {
          tweet.likes -= 1;
          userLikedTweets.splice(userLikedTweets.indexOf(id), 1);
        } else {
          tweet.likes += 1;
          userLikedTweets.push(id);
        }
      } 
      return tweet;
    })

    const user = this.state.user;
    user.likedTweets = userLikedTweets;

    this.setState({
      tweet,
      user
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <div>
            <h1><Link to="/">Project X</Link></h1>
            <h2>Welcome {this.state.user.username}!</h2>
          </div>
          <nav>
            <ul>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/tweets">Tweets</Link></li>
              <li><Link to="/tweets/add">Add Tweets</Link></li>
            </ul>
          </nav>
        </header>
        <Route exact path="/profile" render={() => 
          <Profile 
            user={this.state.user} 
            tweets={this.state.tweets}
            editProfile={this.editProfile}
            updateTweet={this.updateTweet}
          />
        } />
        <Route path="/profile/edit" render={() =>
          <Form 
            user={this.state.user} 
            submitEditProfile={this.submitEditProfile} />
        } />
        <Route exact path="/tweets" render={() =>
          <Tweets 
            tweets={this.state.tweets} 
            updateTweet={this.updateTweet} 
          />
        } />
        <Route path="/tweets/add" render={() =>
          <CreateTweet createTweet={this.createTweet} />
        } />
      </div>
    );
  }
}

export default withRouter(App);
