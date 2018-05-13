import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

import { onLoginRequest } from '../../actions/auth'

class LoginPage extends React.Component {
  constructor (props) {
    super(props)

    this.emailRef = React.createRef()
    this.passwordRef = React.createRef()
  }

  render () {
    const { onLoginRequestAction } = this.props

    return (
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <Card>
            <CardHeader className='text-center'>Login</CardHeader>
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label for='email' sm={3}>Email</Label>
                  <Col sm={9}>
                    <Input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='Please input your email.'
                      innerRef={this.emailRef}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for='password' sm={3}>Password</Label>
                  <Col sm={9}>
                    <Input
                      type='password'
                      name='password'
                      id='password'
                      placeholder='Please input your password.'
                      innerRef={this.passwordRef}
                    />
                  </Col>
                </FormGroup>
                <Button
                  block
                  color='success'
                  type='submit'
                  onClick={(e) => {
                    e.preventDefault()
                    console.log(this.emailRef.current.value)
                    console.log(this.passwordRef.current.value)
                    onLoginRequestAction({
                      email: this.emailRef.current.value,
                      password: this.passwordRef.current.value
                    })

                    this.passwordRef.current.value = ''
                  }}
                > Login
                </Button>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    )
  }
}

export function mapDispatchToProps (dispatch) {
  return {
    onLoginRequestAction: ({ email, password }) => {
      dispatch(onLoginRequest({ email, password }))
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginPage)
