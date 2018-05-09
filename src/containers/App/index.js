import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'

import HomePage from '../HomePage'
import LoginPage from '../LoginPage'
import BookListPage from '../BookListPage'
import NewBookPage from '../NewBookPage'
import { onMeRequest } from '../../actions/auth'

class App extends React.Component {
  componentDidMount() {
    const { user, onMeRequestAction } = this.props
    if (user) {
      onMeRequestAction()
    }
  }

  render() {
    const { user } = this.props

    return (
      <Router>
        <Switch>
          <Route
            exact path='/'
            render={props => user ? <BookListPage /> : <HomePage />}
          />
          <Route
            path='/login'
            render={props => user ? <Redirect to={{pathname: '/'}} /> : <LoginPage />}
          />
          <Route
            path='/new'
            render={props => user ? <NewBookPage /> : <Redirect to={{pathname: '/login'}} />}
          />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = store => {
  const { user } = store.auth
  return { user }
}

const mapDispatchToProps = dispatch => {
  return {
    onMeRequestAction: () => {
      dispatch(onMeRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)