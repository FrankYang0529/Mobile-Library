import React from 'react'
import {
  Button,
  Form,
  Input
} from 'reactstrap'

class SearchBook extends React.Component {
  render () {
    return (
      <div className='col-12 col-sm-12 col-md-6 offset-md-3'>
        <Form inline className='book-search justify-content-center'>
          <Input type='search' placeholder='Search' className='book-search-input' />
          <Button className='book-search-button' color='primary'>
            <i className='fas fa-search' />
          </Button>
        </Form>
      </div>
    )
  }
}

export default SearchBook
