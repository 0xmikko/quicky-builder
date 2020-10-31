/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';

export interface ContentProps {
  title: string;
  show: string | React.ReactElement;
}

export function Content({title, show}: ContentProps): React.ReactElement {
  return typeof show === 'string' ? (
    <iframe
      title={title}
      style={{
        width: '100%',
        height: '100%',
        border: 0,
      }}
      src={show}
    />
  ) : (
    show
  );
}
