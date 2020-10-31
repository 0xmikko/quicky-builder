/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React, {useEffect, useState} from 'react';
import {Content} from './Content';
import {TabMenu} from '../../screens/Phone/Menu';
import {Dimensions, ScaledSize} from 'react-native';

export interface IphoneXFrameProps {
  orientation: 'portrait' | 'landscape';
  show: string | React.ReactElement;
  title?: string;
}

export function IphoneXFrame({
  orientation,
  show,
  title,
}: IphoneXFrameProps): React.ReactElement {
  const [ratio, setRatio] = useState(1);
  const [leftMargin, setLeftMargin] = useState(0);

  const topMargin = 50;

  const sizeUpdateHandler = ({window}: {window: ScaledSize}) => {
    const height = window.height - 70 - topMargin * 2;
    const ratio = height / 812;
    const width = 375 * ratio;
    const leftMargin = (window.width / 2 - width) / 2 - 15;

    setRatio(ratio);
    setLeftMargin(leftMargin);
  };

  useEffect(() => {
    sizeUpdateHandler({window: Dimensions.get('window')});
    Dimensions.addEventListener('change', sizeUpdateHandler);
    return () => Dimensions.removeEventListener('change', sizeUpdateHandler);
  }, []);

  return (
    <div
      className={`marvel-device iphone-x ${orientation}`}
      style={{
        transform: `scale(${ratio.toFixed(2)})`,
        marginTop: `${topMargin}px`,
        // marginLeft: `${leftMargin}px`,
        transformOrigin: '0 0',
      }}>
      {/*<div className="notch">*/}
      {/*  <div className="camera" />*/}
      {/*  <div className="speaker" />*/}
      {/*</div>*/}
      <div className="top-bar" />
      <div className="sleep" />
      <div className="bottom-bar" />
      <div className="volume" />
      <div className="overflow">
        <div className="shadow shadow--tr" />
        <div className="shadow shadow--tl" />
        <div className="shadow shadow--br" />
        <div className="shadow shadow--bl" />
      </div>
      <div className="inner-shadow" />
      <div className="screen">
        <Content title={title || ''} show={show} />
      </div>
    </div>
  );
}
