import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class SignOut extends Component {
    componentDidMount() {
        this.props.dispatch(setAuthedUser(null));
    }

    render() {
        return(
            <h1>Thank you for signing out. You will be redirected to our sign in page shortly.</h1>
        )
    }
}

export default connect()(SignOut);