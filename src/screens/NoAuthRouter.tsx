/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {Route, Switch} from 'react-router';
import {withTracker} from '../components/withTrackerHOC';
import {LoginScreen} from './Auth/LoginScreen/LoginScreen';
import {SignupScreen} from './Auth/LoginScreen/SignupScreen';
import {GoogleAuthDoneScreen} from './Auth/GoogleDoneScreen';

export function NoAuthRouter(): React.ReactElement {
  return (
    <Switch>
      <Route path="/login/" exact={true} component={withTracker(LoginScreen)} />
      <Route
        path="/signup/"
        exact={true}
        component={withTracker(SignupScreen)}
      />

      <Route
        path="/login/google/done/"
        exact={true}
        render={() => <GoogleAuthDoneScreen method={'login'} />}
      />

      <Route path={'*'} component={withTracker(LoginScreen)} />
    </Switch>
  );
}
