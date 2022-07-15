import React, {FC} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './TransactionScreen.style';
import {TTransactionScreenViewProps} from './TransactionScreen.type';
import {TransactionList} from '../../components';

export const TransactionScreenView: FC<TTransactionScreenViewProps> = ({
  data,
  logoutPress,
}) => {
  return (
    <View style={styles.TransactionScreenViewContainer}>
      <Button title={'Logout'} onPress={logoutPress} />
      <View>
        <TransactionList data={data} />
      </View>
    </View>
  );
};
