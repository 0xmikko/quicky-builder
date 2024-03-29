/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider} from 'react-redux';

import {ThemeProvider} from 'react-native-elements';
import {theme} from './styles';

import {NavigationContainer} from '@react-navigation/native';

import configureStore from './store';
import {AuthSwitcher} from './screens/AuthSwitcher';
import {enableScreens} from 'react-native-screens';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import './devices.min.css';

enableScreens();
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <BrowserRouter>
            <AuthSwitcher />
          </BrowserRouter>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
