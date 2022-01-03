import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
} from '../constants/productConstants';
import axios from 'axios';

export const ListProduct = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const { data } = await axios.get('https://fakestoreapi.com/products')
        console.log(data);
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data,
        })
    } catch (err) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        })
    }
}