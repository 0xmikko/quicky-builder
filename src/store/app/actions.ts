/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {APPS_PREFIX} from './';
import {ThunkAction} from 'redux-thunk';
import {RootState} from '../index';
import {Action} from 'redux';
import {namespace} from '../profile';
import {SocketEmitAction} from '../socketMiddleware';
import {LIST_FAILURE} from 'redux-data-connect';

export const connectSocket = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  dispatch({
    type: 'SOCKET_ON',
    namespace,
    event: 'app:token',
    typeOnSuccess: 'APP_TOKEN',
  });
  dispatch({
    type: 'SOCKET_ON',
    namespace,
    event: 'app:screen',
    typeOnSuccess: 'APP_SCREEN',
  });
};

export const getToken: (opHash: string) => SocketEmitAction = opHash => ({
  type: 'SOCKET_EMIT',
  namespace,
  event: 'app:getAppToken',
  typeOnFailure: 'APP_TOKEN_FAILED',
  payload: undefined,
  opHash,
});

export const newApp: (url: string, opHash: string) => SocketEmitAction = (
  url: string,
  opHash,
) => ({
  type: 'SOCKET_EMIT',
  namespace,
  event: 'app:new',
  typeOnFailure: APPS_PREFIX + LIST_FAILURE,
  payload: undefined,
  opHash,
});

export const reset: (opHash: string) => SocketEmitAction = opHash => ({
  type: 'SOCKET_EMIT',
  namespace,
  event: 'app:reset',
  typeOnFailure: APPS_PREFIX + LIST_FAILURE,
  payload: undefined,
  opHash,
});
