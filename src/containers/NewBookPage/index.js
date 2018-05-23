import React from 'react'
import {
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Nav,
  NavItem,
  Row
} from 'reactstrap'

import './style.css'
import SearchBookList from './SearchBookList'
import AddBook from './AddBook'

export default class NewBookPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      step: (props.location.hash === '#step2') ? 2 : 1
    }
  }

  render () {
    const { step } = this.state

    return (
      <Container>
        <Row>
          <Col xs='12'>
            <Nav pills justified className='step'>
              <NavItem active>
                <ListGroup>
                  <ListGroupItem
                    action
                    tag='a'
                    href='#step1'
                    active={step === 1}
                    onClick={() => {
                      this.setState({ step: 1 })
                    }}
                  >
                    <ListGroupItemHeading>Step 1</ListGroupItemHeading>
                    <ListGroupItemText className='step-text'>Search Book</ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </NavItem>
              <NavItem active>
                <ListGroup>
                  <ListGroupItem
                    action
                    tag='a'
                    href='#step2'
                    active={step === 2}
                    onClick={() => {
                      this.setState({ step: 2 })
                    }}
                  >
                    <ListGroupItemHeading>Step 2</ListGroupItemHeading>
                    <ListGroupItemText className='step-text'>Add Book</ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        {
          (step === 1) ? (
            <SearchBookList />
          ) : (
            <AddBook />
          )
        }
      </Container>
    )
  }
}
