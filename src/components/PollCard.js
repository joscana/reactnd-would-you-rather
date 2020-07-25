import React, { Component, useRef, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../actions/questions';
import { Redirect } from 'react-router-dom';

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
        this.props.dispatch(handleSaveAnswer(this.props.loggedInUser.id, this.props.question.id, this.state.value));
    }
    
    render() {
        if (!this.props.loggedInUser) {
            return (<Redirect to='/login'/>)
        }

        if (!this.props.question) {
            return (<Redirect to='/error'/>)
        }


        const optionOneVotes = this.props.question.optionOne.votes.length;
        const optionTwoVotes = this.props.question.optionTwo.votes.length;

        const total = optionOneVotes + optionTwoVotes;

        const optionOneRatio = optionOneVotes/total;
        const optionTwoRatio = optionTwoVotes/total;        

        const answeredView = (
            <div className="answered-poll-card">
                <div className='avatar-container'>
                 <img className="avatar"
                        src={this.props.author.avatarURL}
                        alt="Random Avatar"
                    />
                </div>
                <h3 className='center'>Asked by: {this.props.question.author}</h3>
                <h1>Results:</h1>
                <div className='results'>
                    <div className='option-card'>
                        <p>{this.props.question.optionOne.text}</p>
                        <p>{optionOneVotes} out of {total} votes</p>
                        <FillBar percentage={optionOneRatio} />
                    </div>
                    <div className='option-card'>
                        <p>{this.props.question.optionTwo.text}</p>
                        <p>{optionTwoVotes} out of {total} votes </p>
                        <FillBar percentage={optionTwoRatio} />
                    </div>
                </div>
            </div>
        );

        const unansweredView = (
            <div className='poll-card-container'>
                    <img className="avatar"
                        src={this.props.author.avatarURL}
                        alt="Random Avatar"
                    />
                    <h3 className='center'>{this.props.question.author} asks: </h3>
                    <p>Would You Rather...</p>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <select onChange={this.handleChange}>
                                <option value={null}>Select an answer</option>
                                <option value='optionOne'>{this.props.question.optionOne.text}</option>
                                <option value='optionTwo'>{this.props.question.optionTwo.text}</option>
                            </select>
                        </label>
                        <input type="submit" value="Submit" className='button' />
                    </form>
            </div>
        );

        return this.props.answered ? answeredView : unansweredView
    }
}


const FillBar = (props) => {
    const { percentage } = props;

    const outerRef = useRef();
    const innerRef = useRef();

    useLayoutEffect ( () => {
        const outerWidth = outerRef.current.offsetWidth;
        const innerWidth = outerWidth * percentage;
        innerRef.current.style.width = innerWidth + "px";
    }, [innerRef]);

    return(
        <div className='outer-bar' ref={outerRef}>
            <div className='inner-bar' ref={innerRef}>
            
            </div>
            <p>{`${percentage*100}%`}</p>
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

export default connect(mapStateToProps)(PollCard)