import React, {FC, useState, useEffect, useContext} from 'react';
import {View} from 'react-native';
import {LoginScreenView} from './LoginScreen.view';
import {TLoginScreenProps} from './LoginScreen.type';
import {useHandleLogin} from '../../config/apiHandle';
import AppContext from '../../context/AppContext';

export const LoginScreen: FC<TLoginScreenProps> = ({}) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isLoading, changeIsLoading] = useState(false);
  const [isLogin, changeIsLogin] = useState(false);
  const [isMessage, setIsMessage] = useState<string>();

  const myContext = useContext(AppContext);

  const loginPress = async () => {
    if (email && password) {
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
    } else {
      setIsMessage('Please Enter Both Name and Password');
    }
  };

  useEffect(() => {
    if (isLogin) {
      myContext.setLoginValue(true);
    } else {
      myContext.setLoginValue(false);
    }
  }, [isLogin]);
  return (
    <View>
      <LoginScreenView
        onPress={loginPress}
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
