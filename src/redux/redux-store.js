import { createStore, combineReducers } from "redux";
import headerReducer from "./header-reducer";
import carouselReducer from "./carousel-reducer";
import productsReducer from "./products-reducer";
import cookieReducer from "./cookie-reducer";

let reducers = combineReducers({
    headerState: headerReducer,
    carouselState: carouselReducer,
    productsState: productsReducer,
    cookieState: cookieReducer
});

let store = createStore(reducers);

export default store;

window.store = store;