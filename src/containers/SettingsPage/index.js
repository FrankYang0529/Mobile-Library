import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Container,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane
} from 'reactstrap'
import classnames from 'classnames'

import './style.css'
import {
  onUpdateEmailRequest,
  onUpdateNameRequest,
  onUpdatePasswordRequest
} from '../../actions/auth'

class SettingsPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      activeTab: '1'
    }

    this.toggle = this.toggle.bind(this)

    this.emailField = React.createRef()
    this.firstNameField = React.createRef()
    this.lastNameField = React.createRef()
    this.oldPasswordField = React.createRef()
    this.newPasswordField = React.createRef()
    this.newPasswordTwiceField = React.createRef()
  }

  componentDidMount () {
    const { user } = this.props

    this.emailField.current.value = user.email
    this.firstNameField.current.value = user.firstName
    this.lastNameField.current.value = user.lastName
  }

  componentDidUpdate () {
    const { user } = this.props

    this.emailField.current.value = user.email
    this.firstNameField.current.value = user.firstName
    this.lastNameField.current.value = user.lastName
  }

  toggle (tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  render () {
    const {
      onUpdateEmailRequestAction,
      onUpdateNameRequestAction,
      onUpdatePasswordRequestAction,
      user
    } = this.props

    return (
      <Container>
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1') }}
                >General Information
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2') }}
                >Password
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab} className='setting-content'>
              <TabPane tabId='1'>
                <Form>
                  <FormGroup row>
                    <Label for='email' sm={{ size: 2, offset: 1 }}>Email</Label>
                    <Col sm={5}>
                      <Input
                        type='email'
                        name='email'
                        id='email'
                        innerRef={this.emailField}
                      />
                    </Col>
                    <Col sm={{ size: 2, offset: 2 }}>
                      <Button
                        color='success'
                        onClick={(e) => {
                          e.preventDefault()
                          onUpdateEmailRequestAction({
                            user,
                            email: this.emailField.current.value
                          })
                        }}
                      >
                        Save
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
                <hr />
                <Form>
                  <FormGroup row>
                    <Label for='firstName' sm={{ size: 2, offset: 1 }}>First Name</Label>
                    <Col sm={5}>
                      <Input
                        type='text'
                        name='firstName'
                        id='firstName'
                        innerRef={this.firstNameField}
                      />
                    </Col>
                    <Col sm={{ size: 2, offset: 2 }}>
                      <Button
                        color='success'
                        onClick={(e) => {
                          e.preventDefault()
                          onUpdateNameRequestAction({
                            user,
                            firstName: this.firstNameField.current.value,
                            lastName: this.lastNameField.current.value
                          })
                        }}
                      >
                        Save
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
                <hr />
                <Form>
                  <FormGroup row>
                    <Label for='lastName' sm={{ size: 2, offset: 1 }}>Last Name</Label>
                    <Col sm={5}>
                      <Input
                        type='text'
                        name='lastName'
                        id='lastName'
                        innerRef={this.lastNameField}
                      />
                    </Col>
                    <Col sm={{ size: 2, offset: 2 }}>
                      <Button
                        color='success'
                        onClick={(e) => {
                          e.preventDefault()
                          onUpdateNameRequestAction({
                            user,
                            firstName: this.firstNameField.current.value,
                            lastName: this.lastNameField.current.value
                          })
                        }}
                      >
                        Save
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </TabPane>
              <TabPane tabId='2'>
                <Form>
                  <FormGroup row>
                    <Label for='oldPassword' sm={{ size: 2, offset: 1 }}>Old Password</Label>
                    <Col sm={5}>
                      <Input
                        type='password'
                        name='oldPassword'
                        id='oldPassword'
                        innerRef={this.oldPasswordField}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for='newPassword' sm={{ size: 2, offset: 1 }}>New Password</Label>
                    <Col sm={5}>
                      <Input
                        type='password'
                        name='newPassword'
                        id='newPassword'
                        innerRef={this.newPasswordField}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for='newPassword' sm={{ size: 2, offset: 1 }}>New Password Twice</Label>
                    <Col sm={5}>
                      <Input
                        type='password'
                        name='newPasswordTwice'
                        id='newPasswordTwice'
                        innerRef={this.newPasswordTwiceField}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm={{ size: 3, offset: 3 }}>
                      <Button
                        color='success'
                        onClick={(e) => {
                          e.preventDefault()
                          onUpdatePasswordRequestAction({
                            oldPassword: this.oldPasswordField.current.value,
                            newPassword: this.newPasswordField.current.value,
                            newPasswordTwice: this.newPasswordTwiceField.current.value
                          })

                          this.oldPasswordField.current.value = ''
                          this.newPasswordField.current.value = ''
                          this.newPasswordTwiceField.current.value = ''
                        }}
                      >
                        Update Password
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    user: store.auth.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateEmailRequestAction: ({ user, email }) => {
      dispatch(onUpdateEmailRequest({ user, email }))
    },
    onUpdateNameRequestAction: ({ user, firstName, lastName }) => {
      dispatch(onUpdateNameRequest({ user, firstName, lastName }))
    },
    onUpdatePasswordRequestAction: ({ oldPassword, newPassword, newPasswordTwice }) => {
      dispatch(onUpdatePasswordRequest({ oldPassword, newPassword, newPasswordTwice }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)
