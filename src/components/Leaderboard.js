import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import UserCard from './UserCard'

class Leaderboard extends Component {
    render() {
        const redirectToLogin =  (this.props.authedUser === null) ? <Redirect to='/login'/> : null
        return (
            <div>
                { redirectToLogin }
                <h3 className='center'>Leaderboard</h3>
                <div className='leaderboard'>
                    <ul className='leaderboard-list'>
                        {this.props.userKeys.map((id) => (
                            <li key={id}>
                                <UserCard id={id}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { authedUser, users } = state
    const userKeys = Object.keys(users)
    return { 
        authedUser: authedUser,
        users: users,
        userKeys: userKeys,
    };
}

export default connect(mapStateToProps)(Leaderboard);