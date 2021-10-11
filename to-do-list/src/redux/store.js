import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer} from "redux-form";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;