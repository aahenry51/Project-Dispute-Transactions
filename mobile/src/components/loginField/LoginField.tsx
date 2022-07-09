import React, {FC, useRef} from 'react';
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
import {styles} from './LoginField.style';
import {TLoginFieldProps} from './LoginField.type';

const refUserName = useRef();

export const LoginField: FC<TLoginFieldProps> = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Username</Text>

      <TouchableOpacity
        onPress={() => {
          refUserName.current.focus();
        }}
        style={styles.wrapper}>
        <TextInput
          ref={refUserName}
          placeholder="Your Username"
          placeholderTextColor="#666666"
          autoCapitalize="none"
          style={styles.textInput}
        />
      </TouchableOpacity>
    </View>
  );
};
