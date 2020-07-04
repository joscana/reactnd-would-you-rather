import React, { Component } from 'react';
import { connect } from 'react-redux'

class Questions extends Component {
    render() {
        return (
            <div>
                <h3 className='center'>Questions</h3>
                <ul className='questions-list'>
                    {this.props.questions.map((id) => (
                        <li key={id}>
                            <p>{`Question ID: ${id}`}</p>
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