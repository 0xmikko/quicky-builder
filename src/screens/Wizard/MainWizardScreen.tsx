/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import '../Auth/LoginScreen/LoginScreen.css';
import {profileSelector} from '../../store/profile';
import {Helmet} from 'react-helmet';
import {ChatScreen} from '../../containers/Chat';
import {IphoneXFrame} from '../../components/IPhone/IPhoneX';
import {MOBILE_ADDR} from '../../config';
import {AppBar} from '../../components/AppBar/AppBar';

export function MainWizardScreen(): React.ReactElement {
  const dispatch = useDispatch();
  const profile = useSelector(profileSelector);

  return (
    <>
      <Helmet title={'Welcome to Quicky'} />
      <Container
        fluid
        style={{
          width: '100vw',
          height: '100vh',
          padding: 0,
          margin: 0,
          overflow: 'hidden',
        }}>
        <AppBar />
        <Container>
          <Row style={{margin: 0, padding: 0}}>
            <Col xl={6} lg={6} md={6} sm={6}>
              <IphoneXFrame orientation={'portrait'} show={MOBILE_ADDR} />
            </Col>
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={6}
              style={{height: 'calc(100vh - 70px)', padding: '15px'}}>
              <ChatScreen />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
