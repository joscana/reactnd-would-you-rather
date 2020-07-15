import React, { Component } from 'react';
import PollCard from './PollCard';
import PollPreviewCard from './PollPreviewCard';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Home extends Component {

    render() {
        const redirectToLogin =  (this.props.authedUser === null) ? <Redirect to='/login'/> : null
        return (
            <div>
                { redirectToLogin }
                <div>
                <h3 className='center'>Questions</h3>
                <ul className='questions-list'>
                    {this.props.questions.map((id) => (
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
    const { questions, authedUser } = state
    return { questions: Object.keys(questions),
             authedUser: authedUser,
            };
}


export default connect(mapStateToProps)(Home);