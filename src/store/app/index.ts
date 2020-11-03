/*
 * Copyright (c) 2020. Mikael Lazarev
 */
import {RootState} from '../index';

export const APPS_PREFIX = 'APPS@@';
export const appsSelector = (state: RootState) => state.app;

export type AppActions = {
  type: 'APP_TOKEN';
  payload: string;
};
