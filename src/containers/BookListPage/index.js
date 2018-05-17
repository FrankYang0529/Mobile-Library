import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import './style.css'
import { onGetBookListRequest } from '../../actions/book'

class BookListPage extends React.Component {
  componentDidMount () {
    this.props.onGetBookListRequestAction()
  }

  render () {
    const { books } = this.props

    return (
      <div className='row'>
        {
          books.map(book => {
            const createdAt = moment(book.created_at, 'ddd, DD MMM YYYY HH:mm:ss')

            return (
              <div key={book._id} className='book col-sm-6 col-md-3'>
                <a href={`/book/${book._id}`}>
                  <img
                    src={book.imgLink}
                    alt={`${book.name} icon`}
                    className='rounded book-cover'
                  />
                </a>
                <div className='book-content'>
                  <a href={`/book/${book._id}`} className='alert-link book-name-link'>
                    <span className='book-name text-center'>{book.name}</span>
                  </a>
                  <span className='book-author text-sm-left'>{book.authors.join(', ')}</span>
                  <span className='book-date text-sm-right'>{createdAt.format('YYYY-MM-DD')}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    books: store.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetBookListRequestAction: () => {
      dispatch(onGetBookListRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookListPage)
