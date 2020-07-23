import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {value: null};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.value === null) {
            alert('Please select a user to sign in!');
            return;
        }
        this.props.dispatch(setAuthedUser(this.state.value));
    }

    render() {
        const redirectToHome =  (this.props.authedUser !== null) ? <Redirect to='/'/> : null
        return (
            <div className='signin-container'>
                 { redirectToHome }
                <div className='welcome'>
                <h2>Welcome to the Would You Rather App!</h2>
                <h4>Please sign in to continue.</h4> 
                </div>
                <div className='signin-form'>
                    <h1>Sign In</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value={null}>Select a user</option>
                                {this.props.users.map((id) => (
                                <option value={id} key={id}>{id}</option>
                                ))}
                            </select>
                        </label>
                        <input type="submit" value="Submit" className='button' />
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { users, authedUser } = state
    return { users: Object.keys(users),
             authedUser: authedUser };
}

export default connect(mapStateToProps)(SignIn)