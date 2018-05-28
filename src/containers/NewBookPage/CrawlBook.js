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

class CrawlBook extends React.Component {
  constructor (props) {
    super(props)

    this.searchField = React.createRef()
  }

  render () {
    const { onCrawlBookRequestAction, loading } = this.props

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
            <div>loading</div>
          ) : (
            <div>non-loading</div>
          )
        }
      </Row>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    loading: store.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCrawlBookRequestAction: ({ query }) => {
      dispatch(onCrawlBookRequest({ query }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CrawlBook)
