/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {AppActions} from './';

export interface AppState {
  token: string;
}

const initialState = {
  token: '',
};

export default function(
  state: AppState = initialState,
  action: AppActions,
): AppState {
  switch (action.type) {
    default:
      return state;
    case 'APP_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
  }
}
