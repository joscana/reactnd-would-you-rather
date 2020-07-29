import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions'


class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
        saved: false
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo, this.props.authedUser));
        this.setState({saved: true})
    }

    optionOneChange = (event) => {
        const text = event.target.value;
        this.setState({optionOne: text});
    }

    optionTwoChange = (event) => {
        const text = event.target.value;
        this.setState({optionTwo: text});
    }

    render() {
        const redirectToLogin =  (this.props.authedUser === null) ? <Redirect to='/login'/> : null
        const redirectToHome =  (this.state.saved) ? <Redirect to='/'/> : null

        return (
            <div>
                { redirectToLogin }
                { redirectToHome }
                <div className="new-question-form">
                    <h1 className='center'>Create New Question</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <p>Complete the question:</p>
                            <p>Would You Rather...</p>
                            <input type="text" name='option-1' placeholder="Enter Option One Text Here" onChange={this.optionOneChange}/>
                            <p className='center'>OR</p>
                            <input type="text" name="option-2" placeholder="Enter Option Two Text Here" onChange={this.optionTwoChange}/>
                        </label>
                        <div className='button-container'>
                            <input type="submit" value="Submit" className="submit-button"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { authedUser } = state
    return { authedUser: authedUser };
}

export default connect(mapStateToProps)(NewQuestion);