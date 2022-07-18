import React, {FC, useState, useEffect, useContext} from 'react';
import {View} from 'react-native';
import {LoginScreenView} from './LoginScreen.view';
import {TLoginScreenProps} from './LoginScreen.type';
import {useHandleLogin, useHandleTransactions} from '../../config/apiHandle';
import AppContext from '../../context/AppContext';

export const LoginScreen: FC<TLoginScreenProps> = ({}) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isLoading, changeIsLoading] = useState(false);
  const [isLogin, changeIsLogin] = useState(false);
  const [isMessage, setIsMessage] = useState<string>();
  const [transValue, setTransValue] = useState([]);

  const myContext = useContext(AppContext);

  const loginData = async () => {
    try {
      await useHandleLogin(
        setIsMessage,
        changeIsLoading,
        email,
        password,
        changeIsLogin,
      );
    } catch (error) {
      setIsMessage(error);
    } finally {
    }
  };

  const transactionData = async () => {
    try {
      console.log('transValue');
      await useHandleTransactions(setTransValue);
    } catch (error) {
      setIsMessage(error);
    } finally {
    }
  };

  const onPress = () => {
    loginData();
  };

  useEffect(() => {
    if (isLogin) {
      myContext.setLoginValue(true);
    } else {
      myContext.setLoginValue(false);
    }
  }, [isLogin, transValue]);
  return (
    <View>
      <LoginScreenView
        onPress={onPress}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        isLoading={isLoading}
        message={isMessage}
      />
    </View>
  );
};
