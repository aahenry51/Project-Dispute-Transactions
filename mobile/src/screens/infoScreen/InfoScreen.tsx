import React, {FC} from 'react';
import {View} from 'react-native';
import {InfoScreenView} from './InfoScreen.view';
import {TInfoScreenProps} from './InfoScreentype';

export const InfoScreen: FC<TInfoScreenProps> = ({}) => {
  return <InfoScreenView />;
};
