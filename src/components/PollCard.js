import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";

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
        return(
            <div className='question-container'>
                <h2>Would You Rather</h2>
                <div className='avatar-container'>
                    <img className="avatar"
                        src={this.props.user.avatarURL}
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
        )
    }
}

function mapStateToProps(state, ownProps) {
    const id = ownProps.match.params.id
    const { questions, users, authedUser } = state
    const question = questions[id]
    const user = users[authedUser]
    const answeredKeys = Object.keys(user.answers)
    const answered = answeredKeys.includes(id)
    return { 
        question: question, 
        user: user,
        answered: answered,
    };
}

export default connect(mapStateToProps)(PollCard)