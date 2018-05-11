import React from 'react'
import { connect } from 'react-redux'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import { onLogoutRequest } from '../actions/auth'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle () {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  render () {
    const { user, onLogoutRequestAction } = this.props

    return (
      <Navbar color='dark' dark expand='lg'>
        <div className='container'>
          <NavbarBrand href='/'>Mobile Library</NavbarBrand>
          <Nav className='ml-auto' navbar>
            {
              (user) ? (
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} nav>
                  <DropdownToggle caret nav>
                    <img
                      src={ (user.avatar) ? user.avatar : 'https://s3-ap-northeast-1.amazonaws.com/mobile-library/public-avatar.png' }
                      className='img-fluid rounded-circle z-depth-0'
                      alt='User icon'
                      width='30'
                    />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem onClick={() => { onLogoutRequestAction() }}>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <NavItem>
                  <NavLink href='/login'>Sign in or Sign up</NavLink>
                </NavItem>
              )
            }
          </Nav>
        </div>
      </Navbar>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogoutRequestAction: () => {
      dispatch(onLogoutRequest())
    }
  }
}

export default connect(null, mapDispatchToProps)(Header)