import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserCard extends Component {
    render() {
        return (
            <div className='user-card'>
                User Card
            </div>
        )
    }
}

export default connect()(UserCard)