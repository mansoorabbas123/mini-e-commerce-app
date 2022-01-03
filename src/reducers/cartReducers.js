import {
    CART_ADD_ITEM,
    REMOVE_FROM_CART,
} from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:

            const item = action.payload
            const existItem = state.cartItems.find(x => x.product === item.product)

            if (existItem) {
                return {
                    ...state, cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                }
            } else {

                return {
                    ...state, cartItems: [...state.cartItems, item]
                }
            }

        case REMOVE_FROM_CART:
            const filteredItems = state.cartItems.filter(x => x.product !== action.payload)
            return {
                ...state, cartItems: filteredItems
            }

        default:
            return state
    }
}