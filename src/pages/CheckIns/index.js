import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function CheckIns() {
  return (
    <View>
      <Text>CheckIns</Text>
    </View>
  );
}

CheckIns.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="check-box" size={20} color={tintColor} />
  ),
  headerTitle: 'Check-ins',
};
