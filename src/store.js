import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
// import { composeWithDevTools} from 'redux-dreevtools-extension'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ))

export default store