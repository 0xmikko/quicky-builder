/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {Dropdown} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useDispatch} from 'react-redux';
import actions from '../../store/actions';

export interface AuthRightMenu {
  name: string;
}

export function AuthRightMenu({name}: AuthRightMenu): React.ReactElement {
  const dispatch = useDispatch();

  const onLogout = () => dispatch(actions.auth.logout());
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
        <FontAwesomeIcon
          icon={'user-circle'}
          size={'2x'}
          style={{height: '18px'}}
        />{' '}
        {name}
      </Dropdown.Toggle>

      <Dropdown.Menu alignRight>
        <Dropdown.Item href="#" onClick={onLogout}>
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
