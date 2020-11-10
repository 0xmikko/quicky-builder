/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {Contact} from './contact';
import {IMessage} from 'react-native-gifted-chat';

export interface Message {
  id: string;
  text: string;
  createdAt: Date;
  user: Contact;
  pending: boolean;
  image?: string;
  video?: string;
  audio?: string;
  quickReplies?: any;
}

export function mapMessageToIMessage(message: Message): IMessage {
  const profile = message.user;
  return {
    ...message,
    _id: message.id,
    user: {
      _id: profile.id,
      name: profile.name,
      avatar: profile.avatar,
    },
  };
}
