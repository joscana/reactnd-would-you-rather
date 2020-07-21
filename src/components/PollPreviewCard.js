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
            <div className='question-container'>
                {redirectToPollCard}
                <div>
                    <img className="avatar"
                        src={this.props.user.avatarURL}
                        alt="Random Avatar"
                    />
                    <h3 className='center'>{this.props.question.author} asks: </h3>
                    <p>Would you rather</p>
                    <p>{this.props.question.optionOne.text}</p>
                    <p>or</p>
                    <p>{this.props.question.optionTwo.text}</p>
                    <button type="button" onClick={this.handleSubmit}>View Poll</button>
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