import React, {FC, createContext} from 'react';
import {THandleLogin} from './apiHandle.type';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useHandleLogin: THandleLogin = async (
  setIsMessage = () => {},
  changeIsLoading = () => {},
  email,
  password,
) => {
  console.log('try');
  const baseURL = 'http://10.0.2.2:8000/api' || 'http://0.0.0.0:8000/api';
  changeIsLoading(true);
  axios
    .post(`http://10.0.2.2:8000/api/login`, {email, password})
    .then(res => {
      const userInfo = res.data;
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      console.log(userInfo);
      setIsMessage('Login Success');
    })
    .catch(e => {
      console.log(`login error ${e}`);
      setIsMessage(`login error ${e}`);
      changeIsLoading(false);
    });
};
