import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'

import { print1, print2, print3 } from './exampleAddons/middleware'

const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(print1, print2, print3)
)

const store = createStore(rootReducer, undefined, middlewareEnhancer)

export default store