import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import {
    productListReducer,
} from './reducers/productReducers'


const rootReducers = combineReducers({
    productList: productListReducer,


})

const middleWare = [thunk]


const initialState = {};

const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare)),
)

export default store
