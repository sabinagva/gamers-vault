//import store from './redux/store';
import App from "./components/App/App";
import React from "react";
import ReactDOM from "react-dom/client";
import createSagaMiddleware from "@redux-saga/core";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { takeLatest, put } from "redux-saga/effects";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
import store from "./redux/store";
import "nes.css/css/nes.min.css";
import "@fontsource/press-start-2p";
import "nes.css/css/nes.min.css";
import "./index.css";

const sagaMiddleware = createSagaMiddleware();

const root = ReactDOM.createRoot(document.getElementById("react-root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
