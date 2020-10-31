/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
// import ComponentSearch from './ComponentSearch';
import {Helmet} from 'react-helmet';

interface PageHeaderProps {
  title?: string;
  back?: boolean;
}

export function PageHeader({title, back}: PageHeaderProps) {
  return (
    <>
      <Helmet title={title} />
    </>
  );
}
