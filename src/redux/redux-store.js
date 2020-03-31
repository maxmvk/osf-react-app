import { createStore, combineReducers } from "redux";
import headerReducer from "./header-reducer";
import carouselReducer from "./carousel-reducer";
import productsReducer from "./products-reducer";
import cookieReducer from "./cookie-reducer";
import footerReducer from "./footer-reducer";
import cartReducer from "./cart-reducer";

let reducers = combineReducers({
    headerState: headerReducer,
    footerState: footerReducer,
    carouselState: carouselReducer,
    productsState: productsReducer,
    cookieState: cookieReducer,
    cartState: cartReducer
});

let store = createStore(reducers);

export default store;

window.store = store;