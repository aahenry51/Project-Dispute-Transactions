import React, {FC} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {styles} from './InfoScreen.style';
import {TInfoScreenViewProps} from './InfoScreen.type';
import {useRoute} from '@react-navigation/native';

export const InfoScreenView: FC<TInfoScreenViewProps> = ({}) => {
  const route = useRoute();

  return (
    <View>
      <Text>{route.params.id}</Text>
    </View>
  );
};
