import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading'
import Homepage from './Homepage'
import Leaderboard from './Leaderboard'
import NewQuestion from './NewQuestion'
import SignIn from './SignIn'
import ViewPoll from './ViewPoll'
import Questions from './Questions'
import Question from './Question'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {
    return (
      <Router>
      <div className='container'>
        <Nav />
        <Questions />
      </div>
      </Router>
    )
  }
}

export default connect()(App);
