import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
    render() {
        return(
            <div className='question-container'>
                <p>{this.props.question.author}</p>
                <h2>Would You Rather</h2>
                <div className='avatar-container'>
                    <img className="avatar"
                        src="https://i.pravatar.cc/100"
                        alt="Random Avatar" 
                    />
                    <form>
                        <label>
                            Select an option:
                            <select value="Vote">
                            <option value={this.props.optionOne}>{this.props.question.optionOne.text}</option>
                            <option value={this.props.optionTwo}>{this.props.question.optionTwo.text}</option>
                            </select>
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const { questions } = state
    const { id } = ownProps
    return { question: questions[id] };
}

export default connect(mapStateToProps)(Question)