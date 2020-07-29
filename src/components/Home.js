import React, { Component } from 'react';
import PollPreviewCard from './PollPreviewCard';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Home extends Component {

    state = {
        showUnanswered: true,
    }

    showAnsweredQuestions = () => {
        if(this.state.showUnanswered === true) {
            this.setState({showUnanswered: false})
        }
    }

    showUnansweredQuestions = () => {
        if(this.state.showUnanswered === false) {
            this.setState({showUnanswered: true})
        }
    }
    

    render() {
        
        const redirectToLogin =  (this.props.authedUser === null) ? <Redirect to='/login'/> : null
        const questionstoShow = (this.state.showUnanswered) ? this.props.unanswered : this.props.answered;
        
        return (
            <div>
                { redirectToLogin }
                <div className='questions-container'>
                    <div className='buttons-container'>
                        <button type="button" className="button" onClick={this.showUnansweredQuestions}>Unanswered</button>
                        <button type="button" className="button" onClick={this.showAnsweredQuestions}>Answered</button>
                    </div>
                    <ul className='questions-list'>
                        {questionstoShow.map((id) => (
                            <li key={id}>
                                <PollPreviewCard id={id} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { questions, authedUser, users } = state
    const questionList = Object.values(questions)

    questionList.sort(function(a, b) {
        return b.timestamp - a.timestamp;
    })

    const answeredKeys = (authedUser != null) ? Object.keys(users[authedUser].answers) : [];
    
    let answered = [];
    let unanswered = [];

    for(let i = 0; i < questionList.length; i++) {
        if(answeredKeys.includes(questionList[i].id)) {
            answered.push(questionList[i].id);
        }
        else {
            unanswered.push(questionList[i].id);
        }
    }

    return { 
             answered: answered,
             unanswered: unanswered,
             authedUser: authedUser,
             users: users,
            };
}


export default connect(mapStateToProps)(Home);