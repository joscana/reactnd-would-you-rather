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
import PollCard from './PollCard'
import PollPreviewCard from './PollPreviewCard'
import Error from './Error'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {
    return (
      <Router>
        <Fragment>
          <Nav authedUser={this.props.authedUser} />
          <Switch>
            <Route path='/' exact component={Home}  />
            <Route path='/add' component={NewQuestion} />
            <Route path='/leaderboard' component={Leaderboard} />
            <Route path='/login' component={SignIn} />
            <Route component={Error} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  console.log(authedUser);
  return {
    loading: authedUser === null,
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(App);
