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
import {LoginScreen, TransactionScreen} from './src/screens';

const App = () => {
  // return <TransactionList data={countries} />;

  return <LoginScreen />;
};

export default App;
