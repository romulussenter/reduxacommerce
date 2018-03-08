import {createStore, combineReducers} from 'redux';
import productsReducer from './products/';
import cartReducer from './cart/';
import searchReducer from './search/';


const rootReducer = combineReducers({
 products:   productsReducer,
 search: searchReducer,
 cart:   cartReducer
});

const store = createStore(
    rootReducer,
    window._REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store;