/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

interface AppBarElementProps {
  title: string;
  to: string;
}

export const AppBarElement: React.FC<AppBarElementProps> = ({
  title,
  to,
}: AppBarElementProps) => {
  return (
    <Nav className="nav-item" >
      <Link to={to} >
          <span style={{color: 'black'}}>{title}</span>
      </Link>
    </Nav>
  );
};
