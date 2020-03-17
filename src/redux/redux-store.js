import { createStore, combineReducers } from "redux";
import headerReducer from "./header-reducer";

let reducers = combineReducers({
    headerState: headerReducer,
});

let store = createStore(reducers);

export default store;

window.store = store;