import React from 'react'
import {
  Collapse,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from 'reactstrap'

class WithoutUser extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState(prevState => ({
      isOpen: !this.state.isOpen
    }))
  }

  render () {
    console.log('here')
    return (
      <div className='container'>
        <NavbarBrand href='/'>Mobile Library</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='/login'>Sign in</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/register'>Sign up</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    )
  }
}

export default WithoutUser
