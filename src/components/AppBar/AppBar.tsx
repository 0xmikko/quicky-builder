/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../../logo.png';
import {AuthRightMenu} from './RightMenu';
import {useSelector} from 'react-redux';
import {profileSelector} from '../../store/profile';
// import AppSearch from "./AppSearch"

export const AppBar = () => {
  const profile = useSelector(profileSelector);

  return (
    <Navbar
      style={{
        backgroundColor: '#79429d',
        height: '48px',
        margin: 0,
        width: '100%',
        border: '0',
        borderBottom: '1px solid #CCC',
        paddingBottom: '8px',
        justifyContent: 'space-between',
      }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <span
              style={{color: 'white', fontSize: '18px', fontWeight: 'bold'}}>
              Quicky Builder
            </span>
          </Link>
        </Navbar.Brand>

        <Navbar
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Nav
            className="navbar-menu"
            style={{justifyContent: 'center', width: '100%'}}></Nav>
          <AuthRightMenu name={profile.name} />
        </Navbar>
        {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
      </Container>
    </Navbar>
  );
};
