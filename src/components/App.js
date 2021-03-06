import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Home from './Home'
import Leaderboard from './Leaderboard'
import NewQuestion from './NewQuestion'
import SignIn from './SignIn'
import Error from './Error'
import Nav from './Nav'
import SignOut from './SignOut'
import PollCard from './PollCard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {   
    return (
      <div >
        <Router>
          <Fragment>
            <LoadingBar />
            <Nav username={(this.props.user) ? this.props.user.name : null} />
              <Switch>
                <Route path='/' exact component={Home}  />
                <Route path='/add' component={NewQuestion} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/login' component={SignIn} />
                <Route path='/logout' component={SignOut} />
                <Route path='/questions/:id' component={PollCard} />
                <Route component={Error} />
              </Switch>
          </Fragment>
        </Router>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { authedUser, users } = state
  const user = users[authedUser]
  return {
    authedUser: authedUser,
    user: user,
  };
}

export default connect(mapStateToProps)(App);
