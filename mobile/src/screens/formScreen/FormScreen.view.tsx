import React, {FC} from 'react';
import {View, Text, Button, Alert, TextInput} from 'react-native';
import {styles} from './FormScreen.style';
import {TFormScreenViewProps} from './FormScreen.type';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

export const FormScreenView: FC<TFormScreenViewProps> = ({}) => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <>
      <Text>{'Reason'}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Why??" />
      </View>
      <View style={styles.button}>
        <Button
          title={'Submit'}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'Transactions'}],
            });
          }}
        />
      </View>
    </>
  );
};
