import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignIn extends Component {
    render() {
        return (
            <h3>Welcome! Please sign in.</h3>
        )
    }
}

export default connect()(SignIn)