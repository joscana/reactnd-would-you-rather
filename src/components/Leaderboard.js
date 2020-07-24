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
                        {this.props.userList.map((user) => (
                            <li key={user.id}>
                                <UserCard id={user.id}/>
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
    const userList = Object.values(users)

    userList.sort(function(a, b) {
        const aScore = Object.keys(a.answers).length + Object.keys(a.questions).length;
        const bScore = Object.keys(b.answers).length + Object.keys(b.questions).length;

        return bScore - aScore;
    })


    return { 
        authedUser: authedUser,
        userList: userList,
    };
}

export default connect(mapStateToProps)(Leaderboard);