/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {Link, useHistory} from 'react-router-dom';

import {Button, Container} from 'react-bootstrap';
import {AUTH_API} from '../../config';
import logo from '../../logo.png';

interface Props {
  isSignup: boolean;
}

/**
 * LoginFom renders login form for Login screen
 * @param onSubmit {Function} Submit login data
 * @constructor
 */
export function LoginForm({isSignup}: Props): React.ReactElement {
  const action = isSignup ? 'Sign up' : 'Sign in';
  const history = useHistory();
  return (
    <Container
      className={'login-form'}
      style={{
        justifyContent: 'space-between',
        flexDirection: 'column',
        display: 'flex',
        height: '100vh',
      }}>
      <div style={{marginTop: '50%'}}>
        <img src={logo} alt={'logo'} style={{height: '75px'}} />
        Quicky for Quickbase
        <div className="divider-text">Welcome to Quicky</div>
        <Button
          className="btn-outline-google btn-block"
          onClick={() => {
            window.location.href = AUTH_API.GoogleRedirectEndpoint;
          }}>
          {action} with Google
        </Button>
        {isSignup ? (
          <>
            <div>
              By signing up, I agree to the Quicky Privacy Policy and Terms of
              Service.
            </div>
            <div style={{marginTop: '15px', marginBottom: '15px'}}>
              Already have an account?{' '}
              <Link to={'/login'} style={{color: '#813ba1'}}>
                Sign in
              </Link>
            </div>
          </>
        ) : (
          <div style={{marginTop: '15px', marginBottom: '15px'}}>
            Do not have an account?{' '}
            <Link to={'/signup'} style={{color: '#813ba1'}}>
              Signup for free
            </Link>
          </div>
        )}
      </div>
      <div className="tx-13 mg-t-20 tx-center" style={{marginBottom: '5%'}}>
        &copy; Quicky for QuickBase, 2020
      </div>
    </Container>
  );
}

export default LoginForm;
