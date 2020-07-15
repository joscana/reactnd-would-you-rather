import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { Redirect } from 'react-router-dom'

class SignOut extends Component {
    componentDidMount() {
        this.props.dispatch(setAuthedUser(null));
    }

    render() {
        return(
            <Fragment>
                <h1>Thank you for signing out. You will be redirected to our sign in page shortly.</h1>
                <Redirect to='/login'/>
            </Fragment>
        )
    }
}

export default connect()(SignOut);