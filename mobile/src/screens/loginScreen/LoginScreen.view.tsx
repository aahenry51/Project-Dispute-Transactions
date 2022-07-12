import React, {FC} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {styles} from './LoginScreen.style';
import {TLoginScreenViewProps} from './LoginScreentype';
import {LoginField} from '../../components';

export const LoginScreenView: FC<TLoginScreenViewProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  onPress,
}) => {
  return (
    <View style={styles.loginScreenViewContainer}>
      <LoginField />

      <View style={styles.loginScreenViewButton}>
        <Button title={'Login'} onPress={onPress} />
      </View>
    </View>
  );
};
