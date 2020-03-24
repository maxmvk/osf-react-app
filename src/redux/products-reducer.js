const SET_PRODUCTS = "SET_PRODUCTS";
const TOOGLE_IS_HOVER = "TOOGLE_IS_HOVER";

let initialState = {
    products: [
        { id: 1,  type: 1, name: "Kristina Dam Oak Table With White Marble Top",  price: 799.55,  photo: "./product-1.png"},
        { id: 2,  type: 2, name: "Hay - About A Lounge  Chair AAL 93",  price: 659.55,  photo: "./product-2.png"},
        { id: 3,  type: 1, name: "Activate Facial Mask and Charcoal Soap",  price: 129.55,  photo: "./product-3.png"},
        { id: 4,  type: 1, name: "Cocktail Table Walnut  | YES",  price: 299.99,  photo: "./product-4.png"},
        { id: 5,  type: 1, name: "Hay - About A Lounge  Chair AAL 93",  price: 659.55,  photo: "./product-5.png"},
        { id: 6,  type: 1, name: "TORY DESK CALENDAR",  price: 410.99,  photo: "./product-6.png"},
        { id: 7,  type: 1, name: "CH445 Wing Chair on  SUITE NY",  price: 330.55,  photo: "./product-7.png"},
        { id: 8,  type: 3, name: "My dragons are  misbehaving again. Unbelieveable!",  price: null,  photo: "./img-gradient.png"},
    ]
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case SET_PRODUCTS: {
            return { 
                ...state,
                products: [ ...state.products, ...action.products ]}
        }

        case TOOGLE_IS_HOVER: {
            return {
                ...state,
                products: state.products.map( p => {
                    if(p.id === action.productId) {
                        return {...p, isHover: !p.isHover}
                    }
                    return p;
                })
            };
        }

        default:
            return state;
    }
}

export const setProducts = (products) => ({ type: SET_PRODUCTS, products })
export const toogleIsHover = (productId) => ({ type: TOOGLE_IS_HOVER, productId })

export default productsReducer;