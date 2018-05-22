import React from 'react'
import { connect } from 'react-redux'
import { Col,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap'
import DatePicker from 'react-date-picker'

import './style.css'
import {
  onGetBookRequest,
  onChangeBookData
} from '../../actions/book'

class BookPage extends React.Component {
  componentDidMount () {
    const { onGetBookRequestAction } = this.props

    onGetBookRequestAction({ id: this.props.match.params.id })
  }

  render () {
    const { onChangeBookDataAction, book } = this.props
    console.log(book)
    const createdAt = book.created_at ? new Date(book.created_at) : new Date(null)

    return (
      <div className='row'>
        <Col xs={{ size: 8, offset: 2 }} sm={{ size: 8, offset: 2 }} md={{ size: 4, offset: 1 }}>
          <img
            src={book.imgLink}
            alt={`${book.name} icon`}
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
                value={book.name}
                onChange={(e) => {
                  onChangeBookDataAction({
                    ...book,
                    name: e.target.value
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
                value={book.authors}
                onChange={(e) => {
                  onChangeBookDataAction({
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
                value={book.publisher}
                onChange={(e) => {
                  onChangeBookDataAction({
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
                value={book.isbn_10}
                onChange={(e) => {
                  onChangeBookDataAction({
                    ...book,
                    isbn_10: e.target.value
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
                value={book.isbn_13}
                onChange={(e) => {
                  onChangeBookDataAction({
                    ...book,
                    isbn_13: e.target.value
                  })
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for='createdAt' md={4}>Created Date</Label>
            <Col md={8}>
              <DatePicker
                className='book-date-form'
                value={createdAt}
                onChange={(date) => {
                  onChangeBookDataAction({
                    ...book,
                    created_at: date
                  })
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col xs={{ size: 10, offset: 1 }} sm={{ size: 12, offset: 0 }}>
              <Button color='primary' block>Save</Button>
              <Button color='danger' block>Delete</Button>
            </Col>
          </FormGroup>
        </Col>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    book: store.books.length ? store.books[0] : {}
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetBookRequestAction: ({ id }) => {
      dispatch(onGetBookRequest({ id }))
    },
    onChangeBookDataAction: (book) => {
      dispatch(onChangeBookData({ book }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPage)
