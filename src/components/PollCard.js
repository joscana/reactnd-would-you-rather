import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import { setAuthedUser } from '../actions/authedUser';

class PollCard extends Component {
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.value === null) {
            alert('Please select an answer to vote!');
            return;
        }
        console.log(this.state.value)

    }
    
    render() {
        console.log(`Answered: ${this.props.answered}`)

        const answeredView = (
            <div className="answered-poll-card">
                <h3>Asked by ______ </h3>
                <h1>Results:</h1>
            </div>
        );

        const unansweredView = (
            <div className='question-container'>
                <h2>Would You Rather</h2>
                <div className='avatar-container'>
                    <img className="avatar"
                        src={this.props.author.avatarURL}
                        alt="Random Avatar"
                    />
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <select onChange={this.handleChange}>
                                <option value={null}>Select an answer</option>
                                <option value='optionOne'>{this.props.question.optionOne.text}</option>
                                <option value='optionTwo'>{this.props.question.optionTwo.text}</option>
                            </select>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );

        return this.props.answered ? answeredView : unansweredView
    }
}

function mapStateToProps(state, ownProps) {
    const id = ownProps.match.params.id
    const { questions, users, authedUser } = state
    const question = questions[id]
    const loggedInUser = users[authedUser]
    const author = users[question.author]
    const answeredKeys = Object.keys(loggedInUser.answers)
    const answered = answeredKeys.includes(id)
    return { 
        question: question, 
        loggedInUser: loggedInUser,
        answered: answered,
        author: author
    };
}

export default connect(mapStateToProps)(PollCard)