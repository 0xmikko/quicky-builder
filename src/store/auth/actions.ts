/*
 * Copyright (c) 2020. Mikael Lazarev
 */
import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';

import {RootState} from '../index';
import {AUTH_API, SSO_ADDR} from '../../config';
import {
  authenticate,
  createGetTokenAtStartupAction,
  createLogoutAction,
  DataConnectRootStateI,
  getFullUrlWithId,
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

export const demoLogin = (
  userId: string,
  opHash: string = '0',
): ThunkAction<
  void,
  DataConnectRootStateI,
  unknown,
  Action<string>
> => async dispatch => {
  console.log('DEMO_LOGIN');
  dispatch(
    authenticate(
      getFullUrlWithId('/auth/demo/:id/', {id: userId, host: SSO_ADDR}),
      '',
      {
        opHash,
        tokenPersistenceSetter,
      },
    ),
  );
};

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
