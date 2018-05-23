import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Col,
  Form,
  Input,
  Row
} from 'reactstrap'

import { onSearchBook } from '../../actions/searchBook'

class SearchBook extends React.Component {
  constructor (props) {
    super(props)

    this.searchField = React.createRef()
  }

  render () {
    const { onSearchBookAction } = this.props
    let isOnComposition = false

    return (
      <Row>
        <Col sm='12' md={{ size: 6, offset: 3 }}>
          <Form inline className='book-search justify-content-center'>
            <Input
              type='search'
              placeholder='Search'
              className='book-search-input'
              innerRef={this.searchField}
              onCompositionStart={() => { isOnComposition = true }}
              onCompositionUpdate={() => { isOnComposition = true }}
              onCompositionEnd={() => {
                isOnComposition = false
                onSearchBookAction({ keyword: this.searchField.current.value })
              }}
              onChange={() => {
                if (!isOnComposition) onSearchBookAction({ keyword: this.searchField.current.value })
              }}
            />
            <Button
              className='book-search-button'
              color='primary'
              onClick={(e) => {
                e.preventDefault()
                onSearchBookAction({ keyword: this.searchField.current.value })
              }}
            >
              <i className='fas fa-search' />
            </Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchBookAction: ({ keyword }) => {
      dispatch(onSearchBook({ keyword }))
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchBook)
