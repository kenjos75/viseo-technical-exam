import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

//import our reducers
import reducers from './reducers'

//create now store
export default store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware
  )
)
