/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {Contact} from './contact';
import {IMessage} from 'react-web-gifted-chat';

export interface Message {
  id: string;
  text: string;
  createdAt: Date;
  user: Contact;
  pending: boolean;
}

export function mapMessageToIMessage(message: Message) : IMessage{
  return {
    id: message.id,
    text: message.text,
    createdAt: message.createdAt,
    user: message.user,
  };
}
