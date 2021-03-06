import React from 'react'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from 'ducks/index'
import { createLogger } from 'redux-logger'
import Router from 'Router'
import CssBaseline from '@material-ui/core/CssBaseline'

const middlewares = [thunkMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger({ collapsed: true }))
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
)

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router />
    </Provider>
  )
}

export default App
