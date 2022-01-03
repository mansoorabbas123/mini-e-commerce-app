import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
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

// const initialStateForProductDetails = {
//     loading: false,
//     productDetail: {},
//     error: ''
// }

// export const productDetailsReducer = (
//     state = initialStateForProductDetails,
//     action
//   ) => {
//     switch (action.type) {
//       case PRODUCT_DETAILS_REQUEST:
//         return { ...state, loading: true }
//       case PRODUCT_DETAILS_SUCCESS:
//         return { loading: false, productDetail: action.payload }
//       case PRODUCT_DETAILS_FAIL:
//         return { loading: false, error: action.payload }
//         case 'PRODUCT_DETAILS_RESET':
//             return {productdetail:{}}
//       default:
//         return state
//     }
//   }

// const initialStateForProductDetails = {
//     loading: false,
//     productDetail: {},
//     error: ''
// }

// export const productDetailsReducer = (state = initialStateForProductDetails, action) => {
//     switch (action.type) {
//         case PRODUCT_DETAILS_REQUEST:
//             return {
//                 loading: true,
//                 productDetail: {}
//             }
//         case PRODUCT_DETAILS_SUCCESS:
//             return {
//                 loading: false,
//                 productDetail: action.payload
//             }
//         case PRODUCT_DETAILS_FAIL:
//             return {
//                 loading: false,
//                 productDetail: {},
//                 error: action.payload
//             }

//         default:
//             return state
//     }
// }

// export const productDeleteReducer = (state = {}, action) => {
//     switch (action.type) {
//         case PRODUCT_DELETE_REQUEST:
//             return { loading: true }
//             break
//         case PRODUCT_DELETE_SUCCESS:
//             return { loading: false, success: true }
//             break
//         case PRODUCT_DELETE_FAIL:
//             return { loading: false, error: action.payload }
//             break
//         default:
//             return state
//     }
// }

// export const productCreateReducer = (state = {}, action) => {
//     switch (action.type) {
//         case PRODUCT_CREATE_REQUEST:
//             return { loading: true }
//             break;
//         case PRODUCT_CREATE_SUCCESS:
//             return { loading: false, success: true, product: action.payload }
//             break;
//         case PRODUCT_CREATE_FAIL:
//             return { loading: false, error: action.payload }
//             break;
//         case PRODUCT_CREATE_RESET:
//             return {}
//             break;
//         default:
//             return state
//     }
// }

// export const productUpdateReducer = (state = {}, action) => {
//     switch (action.type) {
//         case PRODUCT_UPDATE_REQUEST:
//             return { loading: true }
//             break;
//         case PRODUCT_UPDATE_SUCCESS:
//             return { loading: false, success: true, product: action.payload }
//             break;
//         case PRODUCT_UPDATE_FAIL:
//             return { loading: false, error: action.payload }
//             break;
//         case PRODUCT_UPDATE_RESET:
//             return {product: {} }
//             break;
//         default:
//            return state
//     }
// }