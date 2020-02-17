import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function AskHelp() {
  return (
    <View>
      <Text>AskHelp</Text>
    </View>
  );
}

AskHelp.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="help" size={20} color={tintColor} />
  ),
};
