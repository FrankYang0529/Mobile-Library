import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import HomePage from '../HomePage'
import LoginPage from '../LoginPage'
import BookListPage from '../BookListPage'
import NewBookPage from '../NewBookPage'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
  }
  render() {
    const { loggedIn } = this.state

    return (
      <Router>
        <Switch>
          <Route
            exact path='/'
            render={props => loggedIn ? <BookListPage /> : <HomePage />}
          />
          <Route
            path='/login'
            render={props => loggedIn ? <Redirect to={{pathname: '/'}} /> : <LoginPage />}
          />
          <Route
            path='/new'
            render={props => loggedIn ? <NewBookPage /> : <Redirect to={{pathname: '/login'}} />}
          />
        </Switch>
      </Router>
    )
  }
}