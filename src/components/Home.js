import React, { Component } from 'react';
import PollCard from './PollCard'
import PollPreviewCard from './PollPreviewCard'
import { connect } from 'react-redux';


class Home extends Component {
    render() {
        return (
            <div>
                <h3 className='center'>Home</h3>
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
    const { questions } = state
    return { questions: Object.keys(questions) };
}


export default connect(mapStateToProps)(Home);