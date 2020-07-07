import React, { Component } from 'react';
import { connect } from 'react-redux';



class PollPreviewCard extends Component {
    render() {
        return (
                <div className='question-container'>
                <h3 className='center'>Poll Preview Card </h3>
                <h2>Would You Rather</h2>
                <div className='avatar-container'>
                    <img className="avatar"
                        src={this.props.user.avatarURL}
                        alt="Random Avatar"
                    />
                    <h3 className='center'>{this.props.question.author} asks: </h3>
                    <p>Would you rather</p>
                    <p>{this.props.question.optionOne.text}</p>
                    <p>or</p>
                    <p>{this.props.question.optionTwo.text}</p>
                            
                        
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

export default connect(mapStateToProps)(PollPreviewCard)