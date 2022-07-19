import React, {FC} from 'react';
import {View} from 'react-native';
import {FormScreenView} from './FormScreen.view';
import {TFormScreenProps} from './FormScreentype';

export const FormScreen: FC<TFormScreenProps> = ({}) => {
  return (
    <View>
      <FormScreenView />
    </View>
  );
};
