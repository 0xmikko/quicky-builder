/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React, {useEffect, useState} from 'react';
import {GiftedChat, IMessage} from 'react-web-gifted-chat';
import actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {mapMessageToIMessage, Message} from '../core/message';

import {profileSelector} from '../store/profile';
import {chatSelector} from '../store/chat';
import {LoadingView} from 'rn-web-components';
import {View} from 'react-native';

export function ChatScreen(): React.ReactElement {
  const dispatch = useDispatch();
  const [hash, setHash] = useState('0');

  useEffect(() => {
    const newHash = Date.now().toString();
    dispatch(actions.chats.getMessages(newHash));
    setHash(newHash);
  }, []);

  const messages = useSelector(chatSelector);
  const profile = useSelector(profileSelector);

  if (messages === undefined) return <LoadingView />;

  const iMessages = Object.values(messages)
    .sort((m1, m2) => (m1.createdAt < m2.createdAt ? 1 : -1))
    .map(mapMessageToIMessage);

  const onSend = (newMessages: IMessage[]) => {
    // setMessages(GiftedChat.append(messages, newMessages as any));
    const message: Message = {
      id: newMessages[0].id.toString(),
      text: newMessages[0].text,
      createdAt: new Date(),
      user: profile,
      pending: true,
    };
    dispatch(
      actions.chats.postMessage(
        {
          text: newMessages[0].text,
        },
        '1',
      ),
    );
  };

  return (
    <View style={{width: '100%', height: '100%'}}>
      <h1>Chat</h1>
      <GiftedChat
        messages={iMessages}
        onSend={onSend}
        user={{
          id: profile.id,
          name: profile.name,
          avatar: profile.avatar,
        }}
        showAvatarForEveryMessage={true}
      />
    </View>
  );
}
