import { createStore } from 'redux'
import RootReducer from './RootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
export const Store = createStore(RootReducer, composeWithDevTools())
console.log('Store created')
