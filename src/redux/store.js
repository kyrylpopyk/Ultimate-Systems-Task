import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import userReducer from "./reducers/userReducer.js";
import boardReducer from "./reducers/boardReducer.js";

let reducers = combineReducers({
    user: userReducer,
    board: boardReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;