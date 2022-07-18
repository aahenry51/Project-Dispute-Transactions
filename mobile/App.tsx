import React, {useState} from 'react';
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
import AppContext from './src/context/AppContext';

const Stack = createNativeStackNavigator();

const App = () => {
  const [loginValue, setLoginValue] = useState(false);
  const [transValue, setTransValue] = useState([]);

  return (
    <AppContext.Provider
      value={{loginValue, setLoginValue, transValue, setTransValue}}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
