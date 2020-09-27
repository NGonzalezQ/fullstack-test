import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/rootReducer'

// Enhancer for Redux Devtools
const composeEnhancers = (
  (
    process.browser &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    process.env.NODE_ENV !== "production"
  )
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose
)

export const initializeStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware())
  )
}