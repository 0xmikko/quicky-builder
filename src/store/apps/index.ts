/*
 * Copyright (c) 2020. Mikael Lazarev
 */
import {RootState} from '../index';

export const APPS_PREFIX = 'APPS@@';
export const appsSelector = (state: RootState) => state.apps.List.data;
