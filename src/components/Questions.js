import React, { Component } from 'react';
import { connect } from 'react-redux'
import Question from './Question'

class Questions extends Component {
    render() {
        return (
            <div>
                <h3 className='center'>Questions</h3>
                <ul className='questions-list'>
                    {this.props.questions.map((id) => (
                        <li key={id}>
                            <Question id={id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { questions } = state
    return { questions: Object.keys(questions) };
}

export default connect(mapStateToProps)(Questions)