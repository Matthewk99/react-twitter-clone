import React, { Component } from 'react';

class CreateTweet extends Component {
    constructor() {
        super();

        this.state = {
            content: ""
        }
    }

    changeTweet = (evt) => {
        if (this.state.content.length < 300) {
            this.setState({
                [evt.target.name]: evt.target.value
            })
        }
    }

    createTweet = (evt) => {
        evt.preventDefault();

        this.props.createTweet(this.state);

        this.setState({
            content: ""
        })
    }


    render() {
        return(
            <>
                <h3>Create New Tweet:</h3>
                <form onSubmit={this.createTweet}>
                    <input 
                        type="text" 
                        value={this.state.content} 
                        onChange={this.changeTweet}
                        name="content" 
                    />
                    <input type="submit" value="Tweet!" />
                </form>
            </>
        )
    }
}

export default CreateTweet;
