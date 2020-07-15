import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class Leaderboard extends Component {
    render() {
        const redirectToLogin =  (this.props.authedUser === null) ? <Redirect to='/login'/> : null
        return (
            <div>
                { redirectToLogin }
                <h3 className='center'>Leaderboard</h3>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { authedUser } = state
    return { authedUser: authedUser };
}

export default connect(mapStateToProps)(Leaderboard);