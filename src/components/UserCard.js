import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserCard extends Component {
    render() {
        const answered = this.props.answeredKeys.length;
        const created = this.props.createdKeys.length;

        const score = answered + created;

        return (
            <div className='user-card'>
                <div className='avatar-container'>
                    <img className="avatar"
                        src={this.props.user.avatarURL}
                        alt="Random Avatar"
                    />
                </div>
                <div className='user-info-container'>
                    <h1>{this.props.user.name}</h1>
                    <p>Answered: {this.props.answeredKeys.length}</p>
                    <p>Created: {this.props.createdKeys.length}</p>
                </div>
                <div className='user-score-container'>
                    <h3>Score</h3>
                    <h3>{score}</h3>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const { questions, users } = state
    const { id } = ownProps
    const user = users[id]
    const answeredKeys = Object.keys(user.answers)
    const createdKeys = Object.keys(user.questions)
    const question = questions[id]
    return { 
        question: question, 
        user: user,
        answeredKeys: answeredKeys,
        createdKeys: createdKeys,
    };
}

export default connect(mapStateToProps)(UserCard)