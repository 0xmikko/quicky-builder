/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React, {useEffect, useState} from 'react';
import {withTracker} from '../components/withTrackerHOC';
import {Redirect, Route, Switch, useHistory} from 'react-router';
import actions from '../store/actions';

import {operationSelector} from 'redux-data-connect';
import {profileSelector} from '../store/profile';
import {LoadingView} from 'rn-web-components';

import {useDispatch, useSelector} from 'react-redux';
import {MainWizardScreen} from './Wizard/MainWizardScreen';

export const Router = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [hash, setHash] = useState('0');

  const getProfile = () => {
    const newHash = Date.now().toString();
    dispatch(actions.profile.getProfile(newHash));
    setHash(newHash);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const operation = useSelector(operationSelector(hash));
  const profile = useSelector(profileSelector);

  if (profile === undefined || operation?.status !== 'STATUS.SUCCESS') {
    return <LoadingView />;
  }

  return (
    <Switch>
      <Route exact path="/" component={withTracker(MainWizardScreen)} />
      <Redirect to={'/'} />
    </Switch>
  );
};
