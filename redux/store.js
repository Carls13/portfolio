import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './root-reducer'

export function initializeStore (initialState) {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware())
  )
}
