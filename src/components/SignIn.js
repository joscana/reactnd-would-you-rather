import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignIn extends Component {
    render() {
        return (
            <div className='signin-container'>
                <div className='welcome'>
                <h2>Welcome to the Would You Rather App!</h2>
                <h4>Please sign in to continue.</h4> 
                </div>
                <div className='signin-form'>
                    <h1>Sign In</h1>
                    <select>
                        {this.props.users.map((id) => (
                            <option value={id}>{id}</option>
                        ))}
                        <option value=''></option>
                    </select>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { users } = state
    return { users: Object.keys(users) };
}

export default connect(mapStateToProps)(SignIn)