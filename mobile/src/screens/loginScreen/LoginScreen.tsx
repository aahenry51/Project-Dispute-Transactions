import React, {FC, useState} from 'react';
import {View} from 'react-native';
import {LoginScreenView} from './LoginScreen.view';
import {TLoginScreenProps} from './LoginScreen.type';
import {useHandleLogin} from '../../config/apiHandle';

export const LoginScreen: FC<TLoginScreenProps> = ({}) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isLoading, changeIsLoading] = useState(false);
  const [isMessage, setIsMessage] = useState<string>();

  const loginPress = async () => {
    if (email && password) {
      try {
        await useHandleLogin(setIsMessage, changeIsLoading, email, password);
      } catch (error) {}
    } else {
    }
  };

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
