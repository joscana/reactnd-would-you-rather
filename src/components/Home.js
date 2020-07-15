import React, { Component } from 'react';
import PollCard from './PollCard';
import PollPreviewCard from './PollPreviewCard';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Home extends Component {

    state = {}

    componentDidMount() {
        if (this.props.authedUser === null) {
            return;
        }

        const answered = Object.keys(this.props.users[this.props.authedUser].answers);
        
        let unanswered = [];

        for(let i = 0; i < this.props.questions.length; i++) {
            if(answered.includes(this.props.questions[i])) {
                continue;
            }
            else {
                unanswered.push(this.props.questions[i])
            }
        }
        

        this.setState({
            answered: answered,
            unanswered: unanswered,
        })
        console.log(`answered: ${answered}`)
        console.log(`unanswered: ${unanswered}`)

    }

    render() {

        const redirectToLogin =  (this.props.authedUser === null) ? <Redirect to='/login'/> : null
        return (
            <div>
                { redirectToLogin }
                <div className='questions-container'>
                    <h3 className='center'>Questions</h3>
                    <ul className='questions-list'>
                        {this.props.questions.map((id) => (
                            <li key={id}>
                                <PollPreviewCard id={id} />
                            </li>
                        ))}
                    </ul>
                    <ul className='answered-questions'>
                        <li>

                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { questions, authedUser, users } = state
    return { questions: Object.keys(questions),
             authedUser: authedUser,
             users: users,
            };
}


export default connect(mapStateToProps)(Home);