import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
    productListReducer,
    productDetailsReducer,
} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

const rootReducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})

const middleWare = [thunk]

const initialState = {};

const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare)),
)

export default store
