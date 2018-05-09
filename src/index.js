import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import axios from 'axios'

import * as reducers from './reducers'
import rootSaga from './middlewares'
import App from './containers/App';

axios.defaults.baseURL = process.env.REACT_APP_API_HOST

const reducer = combineReducers({
  ...reducers
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)