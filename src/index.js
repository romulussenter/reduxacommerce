import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import store from './store.js';


ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
