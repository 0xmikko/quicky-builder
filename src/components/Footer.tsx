import React from 'react';
import { Container } from 'react-bootstrap';
import CookieConsent from 'react-cookie-consent';

export function Footer(): React.ReactElement {
  return (
    <footer className={'footer-container'}>
      <CookieConsent
        location="bottom"
        buttonText="Yes, I consent"
        cookieName="cookieConsent"
        style={{background: '#2B373B'}}
        buttonStyle={{
          color: '#4e503b',
          fontSize: '16px',
          minWidth: '150px',
          borderRadius: '5px',
        }}
        buttonWrapperClasses={'consent-button'}
        expires={150}>
        🍪 We need to talk about cookies! 🍪
        <br />
        <span style={{fontSize: '13px', lineHeight: 1}}>
          Quicky and its partners use cookies to operate the website and
          platform, for analytical purposes, and for advertising/targeting
          purposes. You can learn more about our use of cookies in Our Privacy
          Policy. Using cookies helps us provide a better experience tailored to
          your needs. By clicking “Yes, I consent” below, you agree to our use
          of analytics and advertising/targeting cookies. You can opt out of our
          use of certain cookies at any time by following the instructions in
          Our Privacy Policy.
        </span>
      </CookieConsent>
      <Container className={'footer-content'}>
        <div>&copy; 2020, Quicky for Quickbase. All rights reserved.</div>
        <div>Facebook</div>
      </Container>
    </footer>
  );
}
