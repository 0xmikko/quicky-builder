/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import actions, {actionsAfterAuth} from '../store/actions';
import {authSelector, isAuthenticatedSelector} from 'redux-data-connect';
import {LoadingView} from 'rn-web-components';
import {NoAuthRouter} from './NoAuthRouter';
import {Router} from './Router';

export const AuthSwitcher: React.FC = () => {
  const {status} = useSelector(authSelector);
  const isUserAuthenticated = useSelector(isAuthenticatedSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    switch (status) {
      case 'AUTH_STARTUP':
        dispatch(actions.auth.getTokenAtStartup());
        break;
      case 'AUTH_SUCCESS':
        dispatch(actionsAfterAuth());
        break;
    }
  }, [status]);

  switch (status) {
    default:
    case 'AUTH_STARTUP':
      return <LoadingView />;
    case 'AUTH_REQUIRED':
    case 'AUTH_SUCCESS':
      if (!isUserAuthenticated) {
        return <NoAuthRouter />;
      }

      return <Router />;
  }
};
