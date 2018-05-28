import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Col,
  Form,
  Input,
  Row
} from 'reactstrap'

import { onCrawlBookRequest } from '../../actions/book'
import { onLoadNewBook } from '../../actions/newBook'

class CrawlBook extends React.Component {
  constructor (props) {
    super(props)

    this.searchField = React.createRef()
  }

  render () {
    const {
      handleHash,
      onCrawlBookRequestAction,
      onLoadNewBookAction,
      books,
      loading
    } = this.props

    return (
      <Row>
        <Col sm='12' md={{ size: 6, offset: 3 }}>
          <Form inline className='crawl-book-form justify-content-center'>
            <Input
              type='search'
              placeholder='Search'
              className='crawl-book-input'
              innerRef={this.searchField}
            />
            <Button
              className='crawl-book-button'
              color='primary'
              onClick={(e) => {
                e.preventDefault()
                onCrawlBookRequestAction({ query: this.searchField.current.value })
                this.setState({ loading: true })
              }}
            >
              <i className='fas fa-search' />
            </Button>
          </Form>
        </Col>
        {
          loading ? (
            <Col md='12'>
              <div className='crawl-book-loader mx-auto' />
            </Col>
          ) : (books.length === 0) ? (
            null
          ) : (
            <Col md={{ size: 6, offset: 3 }}>
              {
                books.map((book) => {
                  return (
                    <a href='#step2' key={book.link} className='crawl-book-card-link'>
                      <div
                        className='crawl-book-card'
                        onClick={() => {
                          onLoadNewBookAction({ book })
                          handleHash(2)
                        }}
                      >
                        <Row>
                          <Col md='4'>
                            <img src={book.imageLink} alt={`${book.title} icon`} className='crawl-book-card-img' />
                          </Col>
                          <Col md='8'>
                            <div className='px-3 crawl-book-card-body'>
                              <h5 className='crawl-book-card-title'>{book.title}</h5>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </a>
                  )
                })
              }
            </Col>
          )
        }
      </Row>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    books: store.books,
    loading: store.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCrawlBookRequestAction: ({ query }) => {
      dispatch(onCrawlBookRequest({ query }))
    },
    onLoadNewBookAction: ({ book }) => {
      dispatch(onLoadNewBook({ book }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CrawlBook)
