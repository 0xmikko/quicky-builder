/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';
import LoginForm from '../../../containers/LoginForm/LoginForm';
import './LoginScreen.css';
import {Helmet} from 'react-helmet';

export const LoginScreen: React.FC = () => {
  return (
    <>
      <Helmet title={'Login'} />
      <Container className="onescreen login-screen" fluid>
        <Row>
          <Col lg={4} xl={4} md={6} sm={12} style={{backgroundColor: 'white', height: '100vh'}}>
            <LoginForm isSignup={false} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
