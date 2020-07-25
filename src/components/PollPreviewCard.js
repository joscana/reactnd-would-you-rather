import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class PollPreviewCard extends Component {
    state = {
        goToPoll: false
    }

    handleSubmit = () => {
        this.setState({goToPoll: true});
    }
    
    render() {
        const redirectToPollCard = (this.state.goToPoll) ? <Redirect to={`/questions/${this.props.id}`}/> : null

        return (
            <div>
                {redirectToPollCard}
                <div className='poll-preview-card-container'>
                    <div className='user-avatar-column'>
                        <div className='card-title-container'>
                            <h3>{this.props.question.author} asks: </h3>
                        </div>
                        <div className='avatar-container'>
                            <img className="avatar"
                                src={this.props.user.avatarURL}
                                alt="Random Avatar"
                            />
                        </div>
                    </div>
                    <div className='preview-button-column'>
                        <div className="question-preview-container">
                            <h3>Would you rather</h3>
                            <p>{this.props.question.optionOne.text}</p>
                            <p>or</p>
                            <p>{this.props.question.optionTwo.text}</p>
                        </div>
                        <button type="button" className='button' onClick={this.handleSubmit}>View Poll</button>
                    </div>
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