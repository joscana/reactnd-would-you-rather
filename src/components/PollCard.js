import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollCard extends Component {
    render() {
        return(
            <div className='question-container'>
                <h2>Would You Rather</h2>
                <div className='avatar-container'>
                    <img className="avatar"
                        src={this.props.user.avatarURL}
                        alt="Random Avatar"
                    />
                    <form>
                        <label>
                            Select an option:
                            <select value="Vote">
                            <option value={this.props.optionOne}>{this.props.question.optionOne.text}</option>
                            <option value={this.props.optionTwo}>{this.props.question.optionTwo.text}</option>
                            </select>
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const { questions, users } = state
    const { id } = ownProps
    const question = questions[id]
    const user = users[question.author]
    return { 
        question: question, 
        user: user
    };
}

export default connect(mapStateToProps)(PollCard)