import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class NewQuestion extends Component {
    render() {
        const redirectToLogin =  (this.props.authedUser === null) ? <Redirect to='/login'/> : null
        return (
            <div>
                { redirectToLogin }
                <div className="new-question-form">
                <h3 className='center'>Create New Question</h3>
                <form>
                    <label>
                        Complete the question:
                        <p>Would You Rather?</p>
                        <input type="text" name='option-1' placeholder="Option One"/>
                        <p>OR</p>
                        <input type="text" name="option-2" placeholder="Option Two"/>
                    </label>
                    <input type="submit" value="Submit" className='button' />
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