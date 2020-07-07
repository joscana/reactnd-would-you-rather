import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
    render() {
        return (
            <div>
                <h3 className='center'>Leaderboard</h3>
            </div>
        )
    }
}

export default connect()(Leaderboard);