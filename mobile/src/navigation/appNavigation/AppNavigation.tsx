import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TransactionScreen} from '../../screens';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  const access_token = false;

  return (
    <Stack.Navigator>
      <Stack.Screen name="Transactions" component={TransactionScreen} />
    </Stack.Navigator>
  );
};
