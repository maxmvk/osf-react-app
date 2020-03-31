const SET_PRODUCTS = "SET_PRODUCTS";
const TOOGLE_ADDED = "TOOGLE_ADDED";
const SET_CURRENT_PRODUCT_SLIDE = "SET_CURRENT_PRODUCT_SLIDE";

let initialState = {
    products: [
        { id: 1,  type: 1, name: "Kristina Dam Oak Table With White Marble Top",  price: 799.55,  photo: "./product-1.png", added: false},
        { id: 2,  type: 2, name: "Hay - About A Lounge  Chair AAL 93",  price: 659.55,  photo: "./product-2.png", added: false},
        { id: 3,  type: 1, name: "Activate Facial Mask and Charcoal Soap",  price: 129.55,  photo: "./product-3.png", added: false},
        { id: 4,  type: 1, name: "Cocktail Table Walnut  | YES",  price: 299.99,  photo: "./product-4.png", added: false},
        { id: 5,  type: 1, name: "Hay - About A Lounge  Chair AAL 93",  price: 659.55,  photo: "./product-5.png", added: false},
        { id: 6,  type: 1, name: "TORY DESK CALENDAR",  price: 410.99,  photo: "./product-6.png", added: false},
        { id: 7,  type: 1, name: "CH445 Wing Chair on  SUITE NY",  price: 330.55,  photo: "./product-7.png", added: false},
        { id: 8,  type: 3, name: "My dragons are  misbehaving again. Unbelieveable!",  price: null,  photo: "./img-gradient.png", added: false},
    ],
    currentProductSlide: 1
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case SET_PRODUCTS: {
            return { 
                ...state,
                products: [ ...state.products, ...action.products ]}
        }

        case TOOGLE_ADDED: {
            return {
                ...state,
                products: state.products.map( p => {
                    if(p.id === action.id) {
                        return {...p, added: !p.added}
                    }
                    return p;
                })
            }
        }

        case SET_CURRENT_PRODUCT_SLIDE: {
            return {...state, currentProductSlide: action.currentProductSlide}
        }

        default:
            return state;
    }
}

export const setProducts = (products) => ({ type: SET_PRODUCTS, products })
export const toogleAdded = (id) => ({ type: TOOGLE_ADDED, id })
export const setCurrentProductSlide = (currentProductSlide) => ({ type: SET_CURRENT_PRODUCT_SLIDE, currentProductSlide })

export default productsReducer;