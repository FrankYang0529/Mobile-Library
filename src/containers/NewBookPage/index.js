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
import CrawlBook from './CrawlBook'
import AddBook from './AddBook'

export default class NewBookPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      step: (props.location.hash === '#step2') ? 2 : 1
    }

    this.handleHash = this.handleHash.bind(this)
  }

  handleHash (step) {
    if (step === 1 || step === 2) {
      this.setState({ step })
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
                    onClick={() => this.handleHash(1)}
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
                    onClick={() => this.handleHash(2)}
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
            <CrawlBook handleHash={this.handleHash} />
          ) : (
            <AddBook />
          )
        }
      </Container>
    )
  }
}
