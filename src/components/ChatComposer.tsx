/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {
  Composer,
  ComposerProps,
  IMessage,
  SendProps,
} from 'react-native-gifted-chat';
import {Platform} from 'react-native';
import React from 'react';

export const ChatComposer = (
  props: ComposerProps & {
    // GiftedChat passes its props to all of its `render*()`
    onSend: SendProps<IMessage>['onSend'];
    text: SendProps<IMessage>['text'];
  },
) => (
  <Composer
    {...props}
    textInputProps={{
      ...props.textInputProps,
      // for enabling the Return key to send a message only on web
      blurOnSubmit: Platform.OS === 'web',
      onSubmitEditing:
        Platform.OS === 'web'
          ? () => {
              if (props.text && props.onSend) {
                props.onSend({text: props.text.trim()}, true);
              }
            }
          : undefined,
    }}
  />
);
