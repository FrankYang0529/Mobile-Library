import React from 'react'
import { connect } from 'react-redux'
import { Col,
  Button,
  FormGroup,
  Input,
  Label,
  Row
} from 'reactstrap'
import { Redirect } from 'react-router'

import {
  onChangeNewBookData,
  onCreateNewBookRequest
} from '../../actions/newBook'

class AddBook extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      redirect: false
    }
  }

  render () {
    const { onChangeNewBookDataAction, onCreateNewBookAction, book } = this.props
    const { redirect } = this.state

    return redirect ? (
      <Redirect to='/' />
    ) : (
      <Row className='new-book-page'>
        <Col xs={{ size: 8, offset: 2 }} sm={{ size: 8, offset: 2 }} md={{ size: 4, offset: 1 }}>
          <img
            src={book.imageLink ? book.imageLink : 'https://s3-ap-northeast-1.amazonaws.com/mobile-library/default-book.png'}
            alt={book.title ? `${book.title} icon` : 'New book icon'}
            className='rounded book-cover'
          />
        </Col>
        <Col xs='0' sm='0' md='1' />
        <Col md='5' className='book-form'>
          <FormGroup row>
            <Label for='title' md={4}>Title</Label>
            <Col md={8}>
              <Input
                type='text'
                name='title'
                id='title'
                value={book.title ? book.title : ''}
                onChange={(e) => {
                  onChangeNewBookDataAction({
                    ...book,
                    title: e.target.value
                  })
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for='authors' md={4}>Authors</Label>
            <Col md={8}>
              <Input
                type='text'
                name='authors'
                id='authors'
                value={book.authors ? book.authors : ''}
                onChange={(e) => {
                  onChangeNewBookDataAction({
                    ...book,
                    authors: e.target.value.split(',').map((author) => author.trim())
                  })
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for='publisher' md={4}>Publisher</Label>
            <Col md={8}>
              <Input
                type='text'
                name='publisher'
                id='publisher'
                value={book.publisher ? book.publisher : ''}
                onChange={(e) => {
                  onChangeNewBookDataAction({
                    ...book,
                    publisher: e.target.value
                  })
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for='isbn10' md={4}>ISBN 10</Label>
            <Col md={8}>
              <Input
                type='text'
                name='isbn10'
                id='isbn10'
                value={book.isbn10 ? book.isbn10 : ''}
                onChange={(e) => {
                  onChangeNewBookDataAction({
                    ...book,
                    isbn10: e.target.value
                  })
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for='isbn13' md={4}>ISBN 13</Label>
            <Col md={8}>
              <Input
                type='text'
                name='isbn13'
                id='isbn13'
                value={book.isbn13 ? book.isbn13 : ''}
                onChange={(e) => {
                  onChangeNewBookDataAction({
                    ...book,
                    isbn13: e.target.value
                  })
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col xs={{ size: 10, offset: 1 }} sm={{ size: 12, offset: 0 }}>
              <Button
                block
                color='success'
                onClick={(e) => {
                  e.preventDefault()
                  onCreateNewBookAction({ book })

                  this.setState({ redirect: true })
                }}
              >Create New Book
              </Button>
            </Col>
          </FormGroup>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    book: store.newBook
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeNewBookDataAction: (book) => {
      dispatch(onChangeNewBookData({ book }))
    },
    onCreateNewBookAction: ({ book }) => {
      dispatch(onCreateNewBookRequest({ book }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBook)
