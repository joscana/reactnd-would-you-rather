import React, { Component } from 'react';
import Nav from './Nav'
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {
    return (
      <div className='container'>
        
      </div>
    )
  }
}

export default connect()(App);
