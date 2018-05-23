import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Row
} from 'reactstrap'

import { onRegisterRequest } from '../../actions/auth'

class RegisterPage extends React.Component {
  constructor (props) {
    super(props)

    this.emailRef = React.createRef()
    this.passwordRef = React.createRef()
    this.firstNameRef = React.createRef()
    this.lastNameRef = React.createRef()
  }

  render () {
    const { onRegisterRequestAction } = this.props

    return (
      <Container>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Card>
              <CardHeader className='text-center'>Register</CardHeader>
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
                    <Label for='firstName' sm={3}>First Name</Label>
                    <Col sm={9}>
                      <Input
                        type='text'
                        name='firstName'
                        id='firstName'
                        placeholder='Please input your first name.'
                        innerRef={this.firstNameRef}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for='lastName' sm={3}>Last Name</Label>
                    <Col sm={9}>
                      <Input
                        type='text'
                        name='lastName'
                        id='lastName'
                        placeholder='Please input your last name.'
                        innerRef={this.lastNameRef}
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
                      onRegisterRequestAction({
                        email: this.emailRef.current.value,
                        firstName: this.firstNameRef.current.value,
                        lastName: this.lastNameRef.current.value,
                        password: this.passwordRef.current.value
                      })

                      this.passwordRef.current.value = ''
                    }}
                  > Register
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export function mapDispatchToProps (dispatch) {
  return {
    onRegisterRequestAction: ({ email, firstName, lastName, password }) => {
      dispatch(onRegisterRequest({ email, firstName, lastName, password }))
    }
  }
}

export default connect(null, mapDispatchToProps)(RegisterPage)
