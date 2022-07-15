import React, {useEffect, useState, useContext} from 'react';
import {AuthNavigation} from '../authNavigation/AuthNavigation';
import {AppNavigation} from '../appNavigation/AppNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppContext from '../../context/AppContext';

export const Router = () => {
  const myContext = useContext(AppContext);

  //   const isLoggedIn = async () => {
  //     try {
  //       userInfo = await AsyncStorage.getItem('userInfo');
  //       userInfo = JSON.parse(userInfo);

  //       if (userInfo) {
  //         myContext.setLoginValue(true);
  //       } else {
  //         myContext.setLoginValue(false);
  //       }
  //     } catch (e) {}
  //   };

  //   useEffect(() => {
  //     console.log(myContext.loginValue);
  //     isLoggedIn();
  //   }, []);

  return myContext.loginValue ? <AppNavigation /> : <AuthNavigation />;
};
