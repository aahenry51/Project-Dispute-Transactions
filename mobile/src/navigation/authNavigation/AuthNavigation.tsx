import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen} from '../../screens';

const Stack = createNativeStackNavigator();

export const AuthNavigation = () => {
  const access_token = false;

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
