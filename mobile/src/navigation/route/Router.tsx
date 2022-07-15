import React, {useEffect, useState} from 'react';
import {AuthNavigation} from '../authNavigation/AuthNavigation';
import {AppNavigation} from '../appNavigation/AppNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Router = () => {
  const [isUserInfo, changeIsUserInfo] = useState({});

  const isLoggedIn = async () => {
    try {
      userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        changeIsUserInfo(userInfo);
      } else {
        changeIsUserInfo({});
      }
    } catch (e) {}
  };

  useEffect(() => {
    console.log('async');
    isLoggedIn();
  }, []);

  return isUserInfo.token ? <AppNavigation /> : <AuthNavigation />;
};
