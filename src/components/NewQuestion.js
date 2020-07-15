import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class NewQuestion extends Component {
    render() {
        const redirectToLogin =  (this.props.authedUser === null) ? <Redirect to='/login'/> : null
        return (
            <div>
                { redirectToLogin }
                <h3 className='center'>New Question</h3>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { authedUser } = state
    return { authedUser: authedUser };
}

export default connect(mapStateToProps)(NewQuestion);