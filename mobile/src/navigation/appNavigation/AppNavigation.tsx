import React, 'FC' from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
    loginScreen,
    transactionScreen,
  } from '../../screens/';

const Stack = createNativeStackNavigator();

export const AppNavigation = () =>{

    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={loginScreen} />
            <Stack.Screen name="Transactions" component={transactionScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );

}