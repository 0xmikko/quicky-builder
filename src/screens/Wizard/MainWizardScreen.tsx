/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import '../Auth/LoginScreen/LoginScreen.css';
import {profileSelector} from '../../store/profile';
import {Helmet} from 'react-helmet';
import {ChatScreen} from '../../containers/Chat';
import {IphoneXFrame} from '../../components/IPhone/IPhoneX';
import {MOBILE_ADDR} from '../../config';
import {AppBar} from '../../components/AppBar/AppBar';
import actions from '../../store/actions';
import {appsSelector} from '../../store/app';
import {operationSelector} from 'redux-data-connect';
import {LoadingView} from 'rn-web-components';
import {Footer} from '../../components/Footer';

export function MainWizardScreen(): React.ReactElement {
  const dispatch = useDispatch();
  const [hash, setHash] = useState('0');

  useEffect(() => {
    const newHash = Date.now().toString();
    dispatch(actions.app.getToken(newHash));
    setHash(newHash);
  }, [dispatch]);

  const profile = useSelector(profileSelector);
  const app = useSelector(appsSelector);
  const operation = useSelector(operationSelector(hash));

  if (operation?.status === 'STATUS.LOADING') {
    return <LoadingView />;
  }

  const phoneRendered =
    app.token === undefined || app.token === '' ? (
      <LoadingView />
    ) : (
      <IphoneXFrame
        orientation={'portrait'}
        url={`${MOBILE_ADDR}?token=${app.token}`}
      />
    );

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
              {phoneRendered}
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
        <Footer />
      </Container>
    </>
  );
}
