import { combineReducers, applyMiddleware, legacy_createStore as createStore} from 'redux';

let reduser = combineReducers({
    
});

const store = createStore(reducers, applyMiddleware());

export default store;