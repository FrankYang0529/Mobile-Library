import React from 'react'
import {
  Navbar
} from 'reactstrap'

import './style.css'
import WithUser from './WithUser'
import WithoutUser from './WithoutUser'

const Header = ({ user }) => {
  return (
    <Navbar className='header-margin' color='dark' dark expand='lg'>
      {
        (user) ? <WithUser user={user} /> : <WithoutUser />
      }
    </Navbar>
  )
}

export default Header
