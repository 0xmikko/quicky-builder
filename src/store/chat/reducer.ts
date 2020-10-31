/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {ChatActions} from './';
import {Message} from '../../core/message';

export interface ChatState {
  data: Record<string, Message>;
}

const initialState: ChatState = {
  data: {},
};

export default function (
  state: ChatState = initialState,
  action: ChatActions,
): ChatState {
  switch (action.type) {
    case 'CHATS_GET_MESSAGES':
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        }

      };

    case 'CHATS_UPDATE_MESSAGE':
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id] : action.payload,
        }

      };

    default:
      return state;
  }
}
