import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import SignIn from '~/pages/SignIn';
import CheckIns from '~/pages/Checkin';
import AskHelp from '~/pages/AskHelp';
import AskHelpDetails from '~/pages/AskHelp/AskHelpDetails';
import AskHelpQuestion from '~/pages/AskHelp/AskHelpQuestion';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({ SignIn }),
        App: createStackNavigator(
          {
            New: createBottomTabNavigator(
              {
                CheckIns,
                NewHelp: {
                  screen: createStackNavigator(
                    {
                      AskHelp,
                      AskHelpDetails,
                      AskHelpQuestion,
                    },
                    {
                      defaultNavigationOptions: {
                        headerShown: false,
                      },
                    }
                  ),
                  navigationOptions: {
                    tabBarLabel: 'Pedir ajuda',
                    tabBarIcon: (
                      <Icon
                        name="help"
                        size={20}
                        color="rgba(255, 255, 255, 0.5)"
                      />
                    ),
                  },
                },
              },
              {
                resetOnBlur: true,
                tabBarOptions: {
                  keyboardHidesTabBar: true,
                  activeTintColor: '#fff',
                  inactiveTintColor: 'rgba(255, 255, 255, 0.5)',
                  style: {
                    backgroundColor: '#EE4E62',
                  },
                },
              }
            ),
          },
          {
            defaultNavigationOptions: {
              header: Header,
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
