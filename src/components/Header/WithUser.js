import React from 'react'
import { connect } from 'react-redux'
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from 'reactstrap'

import { onLogoutRequest } from '../../actions/auth'

class WithUser extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      navDropdownOpen: false
    }

    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav () {
    this.setState(prevState => ({
      navDropdownOpen: !prevState.navDropdownOpen
    }))
  }

  render () {
    const { user, onLogoutRequestAction } = this.props

    return (
      <div className='container'>
        <NavbarBrand href='/' className='text-white'>Mobile Library</NavbarBrand>
        <NavbarToggler onClick={this.toggleNav} />
        <Collapse isOpen={this.state.navDropdownOpen} navbar>
          <Nav className='ml-auto' navbar>
            <DropdownItem divider />
            <NavItem>
              <NavLink href='/new' className='text-white'>
                <i className='fas fa-plus' />
                <span className='pl-2'>Add New Book</span>
              </NavLink>
            </NavItem>
            <DropdownItem divider />
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <img
                  src={(user.avatar) ? user.avatar : 'https://s3-ap-northeast-1.amazonaws.com/mobile-library/public-avatar.png'}
                  className='img-fluid rounded-circle z-depth-0'
                  alt={`${user.firstName} icon`}
                  width='30'
                />
                <span className='pl-2 text-white'>{user.firstName}</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={() => { onLogoutRequestAction() }}>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </div>
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

export default connect(null, mapDispatchToProps)(WithUser)
