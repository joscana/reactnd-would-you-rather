import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignIn extends Component {
    render() {
        return (
            <div className='signin-container'>
            <h3>Welcome to the Would You Rather App! Please sign in to continue.</h3>
            </div>
        )
    }
}

export default connect()(SignIn)