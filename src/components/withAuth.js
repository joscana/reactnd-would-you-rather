import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'
import SignIn from './SignIn'

const Auth = WrappedComponent => (props) => {
    return props.authedUser
        ? <WrappedComponent {...props} />
        : <SignIn />
}

function mapStateToProps(state) {
    const { authedUser } = state;
    return {
        authedUser: authedUser,
    };
}

const withAuth = compose(
    connect(mapStateToProps),
    Auth
)

export default withAuth