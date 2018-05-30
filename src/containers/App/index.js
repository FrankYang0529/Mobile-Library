import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Alert,
  Container,
  Col,
  Row
} from 'reactstrap'

import './style.css'
import HomePage from '../HomePage'
import LoginPage from '../LoginPage'
import BookListPage from '../BookListPage'
import BookPage from '../BookPage'
import NewBookPage from '../NewBookPage'
import RegisterPage from '../RegisterPage'
import SettingsPage from '../SettingsPage'
import Header from '../../components/Header'
import { onMeRequest } from '../../actions/auth'
import { onClearMessage } from '../../actions/alert'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.closeMessage = this.closeMessage.bind(this)
  }

  componentDidMount () {
    const { user, onMeRequestAction } = this.props
    if (user) {
      onMeRequestAction()
    }
  }

  closeMessage () {
    const { onClearMessageAction } = this.props
    onClearMessageAction()
  }

  render () {
    const { user, alert } = this.props

    return (
      <div>
        <Header user={user} />
        {
          alert.message ? (
            <Container>
              <Row>
                <Col md={{ size: 10, offset: 1 }}>
                  <Alert
                    color={alert.color}
                    className='alert-message'
                    isOpen
                    toggle={this.closeMessage}
                  >
                    {alert.message}
                  </Alert>
                </Col>
              </Row>
            </Container>
          ) : (
            null
          )
        }
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
              path='/register'
              render={props => user ? <Redirect to={{pathname: '/'}} /> : <RegisterPage />}
            />
            <Route
              path='/settings'
              render={props => user ? <SettingsPage /> : <Redirect to={{pathname: '/login'}} />}
            />
            <Route
              path='/new'
              render={props => user ? <NewBookPage {...props} /> : <Redirect to={{pathname: '/login'}} />}
            />
            <Route
              path='/book/:id'
              render={props => user ? <BookPage {...props} /> : <Redirect to={{pathname: '/login'}} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.auth.user,
    alert: store.alert
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onMeRequestAction: () => {
      dispatch(onMeRequest())
    },
    onClearMessageAction: () => {
      dispatch(onClearMessage())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
