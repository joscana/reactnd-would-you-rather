import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, BrowserRouter, Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading'
import Home from './Home'
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
        <Fragment>
          <Nav />
          <Switch>
            <Route path='/' exact component={Home}  />
            <Route path='/add' component={NewQuestion} />
            <Route path='/leaderboard' component={Leaderboard} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App);
