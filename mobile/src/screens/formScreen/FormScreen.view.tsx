import React, {FC} from 'react';
import {View, Text, Button, Alert, TextInput} from 'react-native';
import {styles} from './FormScreen.style';
import {TFormScreenViewProps} from './FormScreen.type';
import {useRoute} from '@react-navigation/native';

export const FormScreenView: FC<TFormScreenViewProps> = ({}) => {
  const route = useRoute();

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} multiline={true} />
    </View>
  );
};
