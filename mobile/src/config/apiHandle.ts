import React, {FC, createContext} from 'react';
import {THandleLogin} from './apiHandle.type';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useHandleLogin: THandleLogin = async (
  setIsMessage = () => {},
  changeIsLoading = () => {},
  email,
  password,
  changeIsLogin = () => {},
) => {
  const baseURL = 'http://10.0.2.2:8000/api' || 'http://0.0.0.0:8000/api';
  changeIsLoading(true);
  axios
    .post(`http://10.0.2.2:8000/api/login`, {email, password})
    .then(res => {
      const userInfo = res.data;
      console.log(userInfo);
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      changeIsLogin(true);
      setIsMessage('Login Success');
    })
    .catch(e => {
      setIsMessage(`${e}`);
      changeIsLoading(false);
    });
};
