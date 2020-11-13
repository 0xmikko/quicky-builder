/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React, {useEffect, useState} from 'react';
import {GiftedChat, IMessage, Reply} from 'react-native-gifted-chat';
import actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {mapMessageToIMessage, Message} from '../core/message';

import {profileSelector} from '../store/profile';
import {chatSelector} from '../store/chat';
import {LoadingView} from 'rn-web-components';
import {View} from 'react-native';
import {Button} from 'react-native-elements';

export function ChatScreen(): React.ReactElement {
  const dispatch = useDispatch();
  const [hash, setHash] = useState('0');

  useEffect(() => {
    if (hash === '0') {
      console.log('SEND-99');
      const newHash = Date.now().toString();
      dispatch(actions.chats.getMessages(newHash));
      setHash(newHash);
    }
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
      id: newMessages[0]._id.toString(),
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

  const onQuickReply = (newMessages: Reply[]) => {
    let text = '';
    newMessages.forEach(msg => {
      text += msg.title;
    });
    dispatch(
      actions.chats.postMessage(
        {
          text,
        },
        '1',
      ),
    );
  };

  return (
    <View style={{width: '100%', height: '100%'}}>
      {/*<h3>Assistant</h3>*/}
      <GiftedChat
        messages={iMessages}
        onSend={onSend}
        onQuickReply={onQuickReply}
        user={{
          _id: profile.id,
          name: profile.name,
          avatar: profile.avatar,
        }}
        showAvatarForEveryMessage={true}
        // renderQuickReplies={repl => {
        //   return (
        //     <Button
        //       title={repl.currentMessage?.quickReplies?.values[0].value || ''}
        //       onPress={() => {
        //         console.log('Hi');
        //       }}
        //       type={'outline'}
        //     />
        //   );
        // }}
      />
    </View>
  );
}
