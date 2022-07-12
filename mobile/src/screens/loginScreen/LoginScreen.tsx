import React, {FC} from 'react';
import {View} from 'react-native';
import {LoginScreenView} from './LoginScreen.view';
import {TLoginScreenProps} from './LoginScreen.type';

export const LoginScreen: FC<TLoginScreenProps> = ({}) => {
  return (
    <View>
      <LoginScreenView />
    </View>
  );
};
