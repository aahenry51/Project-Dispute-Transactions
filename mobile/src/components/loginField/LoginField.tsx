import React, {FC} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import {TLoginFieldProps} from './LoginField.type';

export const LoginField: FC<TLoginFieldProps> = ({placeholder}) => {
  return (
    <TextInput
      placeholder="Your Username"
      placeholderTextColor="#666666"
      autoCapitalize="none"
    />
  );
};
