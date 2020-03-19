const SET_PRODUCTS = "SET_PRODUCTS";

let initialState = {
    products: []
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case SET_PRODUCTS: {
            return {...state, products: action.products }
        }

        default:
            return state;
    }
}

export const setProducts = (products) => ({ type: SET_PRODUCTS, products })

export default productsReducer;