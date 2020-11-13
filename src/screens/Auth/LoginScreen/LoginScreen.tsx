/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import actions from '../../../store/actions';
import LoginForm from '../../../containers/LoginForm/LoginForm';
import './LoginScreen.css';
import {Helmet} from 'react-helmet';

export const LoginScreen: React.FC = () => {
  const dispatch = useDispatch();


  return (
    <>
      <Helmet title={'Login'} />
      <Container className="onescreen login-screen" fluid>
        <Card>
          <LoginForm isSignup={false} />
        </Card>
      </Container>
    </>
  );
};
