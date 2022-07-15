import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {LoginField, TransactionList} from './src/components';
import {Router} from './src/navigation/route/Router';
import {LoginScreen, TransactionScreen} from './src/screens';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  // return <TransactionList data={countries} />;
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
