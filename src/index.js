import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from "redux-thunk"
import { Provider } from 'react-redux'
import { rootReducer } from './store/reducers/rootReducer';

const middlewares = [logger, thunk]
const store = createStore(rootReducer, applyMiddleware(...middlewares))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();


// middleware is used to add custom functionality to our react project