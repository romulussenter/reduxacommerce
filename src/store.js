import {createStore} from 'redux';

const store = createStore(
    () => {},
    window._REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store;