import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard'
import withAuth from './withAuth';

class Leaderboard extends Component {
    render() {
        return (
            <div>
                <h1 className='center'>Leaderboard</h1>
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

export default withAuth(connect(mapStateToProps)(Leaderboard));