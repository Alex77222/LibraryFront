import { combineReducers, applyMiddleware, legacy_createStore as createStore} from 'redux';
import authReducer from "./redusers/authReducer";
import thunkMiddleware from 'redux-thunk';
import booksReducer from "./redusers/booksReducer";

let reducers = combineReducers({
    authReducer: authReducer,
    booksReducer:booksReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;