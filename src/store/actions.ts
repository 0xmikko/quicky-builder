/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import * as app from './app/actions';
import * as auth from './auth/actions';
import * as chats from './chat/actions';
import * as profile from './profile/actions';
import * as operations from 'redux-data-connect/lib/operations/actions';
import {ThunkAction} from 'redux-thunk';
import {RootState} from './index';
import {Action} from 'redux';

export default {
  app,
  auth,
  chats,
  profile,
  operations,
};

// Connect socket connects redux with socket server interface
export const actionsAfterAuth = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async dispatch => {
  // Connect sockets to listen server events
  dispatch(profile.connectSocket());
  dispatch(profile.getProfile('actionsAfterAuth'));
  dispatch(operations.connectSocket());
  dispatch(chats.connectSocket());
  dispatch(app.connectSocket());
  console.log('[SOCKET.IO]: All listeners connected!');
};
