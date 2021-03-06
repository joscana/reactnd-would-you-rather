import React, { Component, useRef, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../actions/questions';
import { Redirect } from 'react-router-dom';
import withAuth from './withAuth';

class PollCard extends Component {

    state = {}

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.value) {
            alert('Please select an answer to vote!');
            return;
        }
        console.log(this.state.value)
        this.props.dispatch(handleSaveAnswer(this.props.loggedInUser.id, this.props.question.id, this.state.value));
    }

    render() {
        
        if (!this.props.question) {
            return (<Redirect to='/error' />)
        }

        const optionOneVotes = this.props.question.optionOne.votes.length;
        const optionTwoVotes = this.props.question.optionTwo.votes.length;

        const total = optionOneVotes + optionTwoVotes;

        const optionOneRatio = (optionOneVotes / total).toFixed(2);
        const optionTwoRatio = (optionTwoVotes / total).toFixed(2);

        const optionOneYourVote = this.props.question.optionOne.votes.includes(this.props.loggedInUser.id)
            ? <p className='center vote'>YOUR VOTE</p>
            : null;

        const optionTwoYourVote = this.props.question.optionTwo.votes.includes(this.props.loggedInUser.id)
            ? <p className='center vote'>YOUR VOTE</p>
            : null;

        const answeredView = (
            <div className="poll-card-container">
                <h3>Asked by: {this.props.author.name}</h3>
                <div className="answered-poll-card">
                    <div className='avatar-container'>
                        <img className="avatar"
                            src={this.props.author.avatarURL}
                            alt="Random Avatar"
                        />
                    </div>
                    <div className="results-container">
                        <h2>Results:</h2>
                        <div className='option-card-container'>
                            {optionOneYourVote}
                            <div className='option-card'>
                                <p>{this.props.question.optionOne.text}</p>
                                <FillBar percentage={optionOneRatio} />
                                <p>{optionOneVotes} out of {total} votes</p>
                            </div>
                        </div>
                        <div className='option-card-container'>
                            {optionTwoYourVote}
                            <div className='option-card'>
                                <p>{this.props.question.optionTwo.text}</p>
                                <FillBar percentage={optionTwoRatio} />
                                <p>{optionTwoVotes} out of {total} votes </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

        const unansweredView = (
            <div className='poll-card-container'>
                <h3>{this.props.author.name} asks: </h3>
                <div className="unanswered-poll-card">
                    <img className="avatar"
                        src={this.props.author.avatarURL}
                        alt="Random Avatar"
                    />
                    <div className='question-button-column'>
                        <p className="center">Would You Rather...</p>
                        <form className='question-button-column' onSubmit={this.handleSubmit} onChange={this.handleChange}>
                            <label>
                                <input type='radio' id='optionOne' name='option' value='optionOne' />
                                {this.props.question.optionOne.text}
                            </label>
                            <label>
                                <input type='radio' id='optionTwo' name='option' value='optionTwo' />
                                {this.props.question.optionTwo.text}
                            </label>
                            <div className='button-container'>
                                <input type="submit" value="Submit" className='submit-button' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );

        return this.props.answered ? answeredView : unansweredView
    }
}


const FillBar = (props) => {
    const { percentage } = props;

    const outerRef = useRef();
    const innerRef = useRef();

    useLayoutEffect(() => {
        const outerWidth = outerRef.current.offsetWidth;
        const innerWidth = outerWidth * percentage;
        innerRef.current.style.width = innerWidth + "px";
    });

    return (
        <div className='outer-bar' ref={outerRef}>
            <div className='inner-bar' ref={innerRef}>

            </div>
            <p className="percentage">{`${percentage * 100}%`}</p>
        </div>
    )
}

function mapStateToProps(state, ownProps) {
    const id = ownProps.match.params.id
    const { questions, users, authedUser } = state
    const question = questions[id]
    const loggedInUser = (authedUser) ? users[authedUser] : null
    const author = (question) ? users[question.author] : null
    const answeredKeys = (loggedInUser) ? Object.keys(loggedInUser.answers) : []
    const answered = answeredKeys.includes(id)
    return {
        question: question,
        loggedInUser: loggedInUser,
        answered: answered,
        author: author
    };
}

export default withAuth(connect(mapStateToProps)(PollCard))