import React, {FC} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {styles} from './LoginScreen.style';
import {TLoginScreenViewProps} from './LoginScreen.type';
import {LoginField} from '../../components';
import Spinner from 'react-native-loading-spinner-overlay';

export const LoginScreenView: FC<TLoginScreenViewProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  onPress,
  isLoading,
  message = 'Please login',
}) => {
  return (
    <View style={styles.loginScreenViewContainer}>
      <Spinner visible={isLoading} />
      <LoginField
        emailTextOnChange={setEmail}
        passwordTextOnChange={setPassword}
        emailTextValue={email}
        passwordTextValue={password}
      />
      <View style={styles.loginScreenViewButton}>
        <Text>{message}</Text>
      </View>

      <View style={styles.loginScreenViewMessage}>
        <Button title={'Login'} onPress={onPress} />
      </View>
    </View>
  );
};
