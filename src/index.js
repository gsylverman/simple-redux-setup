import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from "./store/reducers/index";
import promiseMiddleware from 'redux-promise';

const storeWithMiddleWare = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={storeWithMiddleWare(reducers())}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
