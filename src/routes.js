import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from '~/pages/SignIn';
import CheckIns from '~/pages/CheckIns';
import AskHelp from '~/pages/AskHelp';
import Header from '~/components/Header';

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
                AskHelp,
              },
              {
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
