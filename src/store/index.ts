/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createApiMiddleware} from 'redux-data-connect';
import {AUTH_API} from '../config';
import {createSocketMiddleware} from './socketMiddleware';

export type RootState = ReturnType<typeof reducer>;

let composeEnhancers: typeof compose;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  composeEnhancers = composeWithDevTools({});
} else {
  composeEnhancers = compose;
}

const apiMiddleware = createApiMiddleware(AUTH_API.RefreshTokenEndpoint);

export default function configureStore() {
  return createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(thunk, createSocketMiddleware(), apiMiddleware),
    ),
  );
}
