import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';

import SignIn from '~/pages/SignIn';
import CheckIns from '~/pages/CheckIns';

const Routes = createAppContainer(
  createStackNavigator({
    SignIn,
    CheckIns,
  })
);

export default Routes;
