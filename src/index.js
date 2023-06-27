//import store from './redux/store';
import App from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import createSagaMiddleware from '@redux-saga/core';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { takeLatest, put } from 'redux-saga/effects'
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import store from './redux/store';
import "nes.css/css/nes.min.css";


const sagaMiddleware = createSagaMiddleware();

//watcher saga holds and listens to sagas
// function* watcherSaga() {
//     yield takeLatest('ADD_WISH', postWish)
//     yield takeLatest('ADD_CATALOG', postCatalog)
//     yield takeLatest('GET_GAMES', fetchGame)
   
// }


//this allows watcher saga start watching

const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
