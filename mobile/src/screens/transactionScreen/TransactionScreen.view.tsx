import React, {FC} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './TransactionScreen.style';
import {TTransactionScreenViewProps} from './TransactionScreen.type';
import {TransactionList} from '../../components';

export const TransactionScreenView: FC<TTransactionScreenViewProps> = ({
  data,
}) => {
  return (
    <View style={styles.TransactionScreenViewContainer}>
      <Button title={'Logout'} />
      <View>
        <TransactionList data={data} onPressItem={onPressItem} />
      </View>
    </View>
  );
};
