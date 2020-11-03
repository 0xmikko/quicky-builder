/*
 * Copyright (c) 2020. Mikael Lazarev
 */
import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';

import {RootState} from '../index';
import {AUTH_API} from '../../config';
import {
  createGetTokenAtStartupAction,
  createLogoutAction,
} from 'redux-data-connect';
import {createOAuthLoginAction} from 'redux-data-connect/lib/auth/actions';

// Persistence management
const tokenPersistenceGetter = async () => {
  const token = localStorage.getItem('token');
  return token;
};
const tokenPersistenceSetter = async (token: string) => {
  await localStorage.setItem('token', token);
};

const localDataPersistenceCleaner = async () => localStorage.clear();

// Login actions
export const loginByGoogle = createOAuthLoginAction(
  AUTH_API.GoogleLoginEndpoint,
  tokenPersistenceSetter,
);

// Startup actions
export const getTokenAtStartup = createGetTokenAtStartupAction(
  AUTH_API.RefreshTokenEndpoint,
  tokenPersistenceGetter,
);

// Logout action
const logoutAction = createLogoutAction();
// localDataPersistenceCleaner

export const logout = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async dispatch => {
  // Clear local storage at logout

  dispatch(logoutAction());
  dispatch({
    type: 'SOCKET_OFF',
  });
};
