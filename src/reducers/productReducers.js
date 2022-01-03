import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants"

const initialStateForProductList = {
    loading: false,
    products: [],
    error: ''
}

export const productListReducer = (state = initialStateForProductList, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {
                loading: true,
                products: []
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case PRODUCT_LIST_FAIL:
            return {
                loading: false,
                products: [],
                error: action.payload
            }

        default:
            return state
    }
}


const initialStateForProductDetails = {
    loading: false,
    productDetail: {},
    error: ''
}

export const productDetailsReducer = (state = initialStateForProductDetails, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                productDetail: {}
            }
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                productDetail: action.payload
            }
        case PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                productDetail: {},
                error: action.payload
            }

        default:
            return state
    }
}

