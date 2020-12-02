import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import reducer from './containers/HomePage/reducer';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware  from 'redux-saga';
import rootSaga from './containers/HomePage/saga';
import { createGlobalStyle }  from 'styled-components';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const GlobalStyles = createGlobalStyle`
  .globalParentWrapper {
    width: 200px;
    background-color: black;
    color: white;
  }
`
ReactDOM.hydrate(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
