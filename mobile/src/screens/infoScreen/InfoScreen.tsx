import React, {FC} from 'react';
import {View} from 'react-native';
import {InfoScreenView} from './InfoScreen.view';
import {TInfoScreenProps} from './InfoScreentype';
import {useNavigation} from '@react-navigation/native';

const onPress = () => {
  const navigation = useNavigation();
  navigation.push('Dispute');
};
export const InfoScreen: FC<TInfoScreenProps> = ({}) => {
  return <InfoScreenView />;
};
