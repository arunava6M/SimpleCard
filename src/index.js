import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const myStore = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(myStore.getState());

ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
