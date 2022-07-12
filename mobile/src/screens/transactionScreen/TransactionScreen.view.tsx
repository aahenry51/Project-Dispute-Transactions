import React, {FC} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {styles} from './TransactionScreen.style';
import {TTransactionScreenViewProps} from './TransactionScreen.type';
import {TransactionList} from '../../components';

export const TransactionScreenView: FC<TTransactionScreenViewProps> = ({
  data,
  onPressItem,
}) => {
  return (
    <View style={styles.TransactionScreenViewContainer}>
      <Text>Transactions</Text>
      <View>
        <TransactionList data={data} onPressItem={onPressItem} />
      </View>
    </View>
  );
};
