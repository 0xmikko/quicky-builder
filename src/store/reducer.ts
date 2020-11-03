/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {combineReducers} from 'redux';
import {authReducer, operationReducer} from 'redux-data-connect';
import app from './app/reducer';
import chats from './chat/reducer';
import profile from './profile/reducer';

export default combineReducers({
  auth: authReducer,
  app,
  chats,
  profile,
  operations: operationReducer,
});
