import {
    CART_ADD_ITEM,
    REMOVE_FROM_CART,
} from '../constants/cartConstants'
import axios from 'axios'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                product: data.id,
                title: data.title,
                image: data.image,
                price: data.price,
                qty,
            },
        })

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    } catch (err) {
        console.log(err)
    }
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

