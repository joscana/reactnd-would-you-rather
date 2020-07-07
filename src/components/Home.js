import React, { Component } from 'react';
import Questions from './Questions';
import { connect } from 'react-redux';


class Home extends Component {
    render() {
        return (
            <div>
                <h3 className='center'>Home</h3>
            </div>
        )
    }
}

export default connect()(Home);