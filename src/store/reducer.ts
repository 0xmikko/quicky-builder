/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {combineReducers} from 'redux';
import {authReducer, operationReducer} from 'redux-data-connect';
import apps from './apps/reducer';
import chats from './chat/reducer';
import profile from './profile/reducer';

export default combineReducers({
  auth: authReducer,
  apps,
  chats,
  profile,
  operations: operationReducer,
});
