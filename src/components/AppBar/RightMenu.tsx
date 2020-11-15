/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {Dropdown} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import actions from '../../store/actions';

export interface AuthRightMenu {
  name: string;
}

export function AuthRightMenu({name}: AuthRightMenu): React.ReactElement {
  const dispatch = useDispatch();

  const onLogout = () => dispatch(actions.auth.logout());
  const onResetSession = () => dispatch(actions.app.reset('Reset'));
  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        style={{
          backgroundColor: 'transparent',
          border: 0,
          marginTop: '5px',
        }}
        className={'dropdown-toggle-nocaret'}>
        {name}
      </Dropdown.Toggle>

      <Dropdown.Menu alignRight>
        <Dropdown.Item onClick={onResetSession}>Reset session</Dropdown.Item>
        <Dropdown.Item onClick={onLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
