import React, {FC} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import {styles} from './LoginField.style';
import {TLoginFieldProps} from './LoginField.type';

export const LoginField: FC<TLoginFieldProps> = ({
  emailPlaceholder = 'Your Email',
  passwordPlaceholder = 'Your Password',
  emailTextOnChange,
  passwordTextOnChange,
  emailTextValue,
  passwordTextValue,
  propsEmailTextbox,
  propsPasswordTextbox,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Email</Text>
      <TextInput
        placeholder={emailPlaceholder}
        style={styles.textInput}
        onChangeText={emailTextOnChange}
        value={emailTextValue}
        {...propsEmailTextbox}
      />
      <Text style={styles.textTitle}>Password</Text>
      <TextInput
        placeholder={passwordPlaceholder}
        secureTextEntry={true}
        style={styles.textInput}
        onChangeText={passwordTextOnChange}
        value={passwordTextValue}
        {...propsPasswordTextbox}
      />
    </View>
  );
};
