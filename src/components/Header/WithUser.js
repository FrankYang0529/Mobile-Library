import React from 'react'
import { connect } from 'react-redux'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand,
  Nav
} from 'reactstrap'

import { onLogoutRequest } from '../../actions/auth'

class WithUser extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      dropdownOpen: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  render () {
    const { user, onLogoutRequestAction } = this.props

    console.log('here2')
    return (
      <div className='container'>
        <NavbarBrand href='/'>Mobile Library</NavbarBrand>
        <Nav className='ml-auto' navbar>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} nav>
            <DropdownToggle caret nav>
              <img
                src={(user.avatar) ? user.avatar : 'https://s3-ap-northeast-1.amazonaws.com/mobile-library/public-avatar.png'}
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
        </Nav>
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
