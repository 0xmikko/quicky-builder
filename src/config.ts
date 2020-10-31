/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {getFullUrl} from 'redux-data-connect';

export const MOBILE_ADDR = 'http://localhost:5000';
export const BACKEND_ADDR = 'http://192.168.1.72:8000';

export const SSO_ADDR = 'http://192.168.1.72:8000';

console.disableYellowBox = true;

export const AUTH_API = {
  GoogleRedirectEndpoint: getFullUrl('/auth/google/login/', {host: SSO_ADDR}),
  GoogleLoginEndpoint: getFullUrl('/auth/google/done/', {host: SSO_ADDR}),
  RefreshTokenEndpoint: getFullUrl('/auth/token/refresh/', {host: SSO_ADDR}),
};
