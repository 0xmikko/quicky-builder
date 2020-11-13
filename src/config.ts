/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {getFullUrl} from 'redux-data-connect';

export const isDev = process.env.NODE_ENV === 'development';

export const TEST_SERVER_ADDR = 'http://localhost:8000';

export const MOBILE_ADDR = isDev
  ? 'http://localhost:5000'
  : 'https://mobile.quicky.digital';

export const BACKEND_ADDR = isDev
  ? TEST_SERVER_ADDR
  : 'https://quicky-server.herokuapp.com';

export const SSO_ADDR = isDev
  ? TEST_SERVER_ADDR
  : 'https://quicky-server.herokuapp.com';

console.disableYellowBox = true;

export const AUTH_API = {
  GoogleRedirectEndpoint: getFullUrl('/auth/google/login/', {host: SSO_ADDR}),
  GoogleLoginEndpoint: getFullUrl('/auth/google/done/', {host: SSO_ADDR}),
  RefreshTokenEndpoint: getFullUrl('/auth/token/refresh/', {host: SSO_ADDR}),
};
