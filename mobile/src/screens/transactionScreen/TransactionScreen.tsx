import React, {FC} from 'react';
import {View} from 'react-native';
import {TransactionScreenView} from './TransactionScreen.view';
import {TTransactionScreenProps} from './TransactionScreentype';

const countries = [
  {
    id: '1',
    name: 'United States',
    info: 'Walmart transaction',
  },
  {
    id: '2',
    name: 'United Kingdom',
    info: 'Walmart transaction',
  },
  {
    id: '3',
    name: 'Israel',
    info: 'Walmart transaction',
  },
  {
    id: '4',
    name: 'India',
    info: 'Walmart transaction',
  },
  {
    id: '5',
    name: 'Nigeria',
    info: 'Walmart transaction',
  },
  {
    id: '6',
    name: 'Uganda',
    info: 'Walmart transaction',
  },
  {
    id: '7',
    name: 'Israel',
    info: 'Walmart transaction',
  },
  {
    id: '8',
    name: 'India',
    info: 'Walmart transaction',
  },
  {
    id: '9',
    name: 'Nigeria',
    info: 'Walmart transaction',
  },
  {
    id: '10',
    name: 'Uganda',
    info: 'Walmart transaction',
  },
  {
    id: '11',
    name: 'Israel',
    info: 'Walmart transaction',
  },
  {
    id: '12',
    name: 'India',
    info: 'Walmart transaction',
  },
  {
    id: '13',
    name: 'Nigeria',
    info: 'Walmart transaction',
  },
  {
    id: '14',
    name: 'Uganda',
    info: 'Walmart transaction',
  },
];

export const TransactionScreen: FC<TTransactionScreenProps> = ({}) => {
  return (
    <View>
      <TransactionScreenView data={countries} />
    </View>
  );
};