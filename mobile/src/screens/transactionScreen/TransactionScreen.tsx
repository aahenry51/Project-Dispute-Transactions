import React, {FC, useContext, useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {TransactionScreenView} from './TransactionScreen.view';
import {TTransactionScreenProps} from './TransactionScreentype';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppContext from '../../context/AppContext';
import {useHandleTransactions} from '../../config/apiHandle';

export const TransactionScreen: FC<TTransactionScreenProps> = ({}) => {
  const navigation = useNavigation();
  const myContext = useContext(AppContext);

  const [isTransValue, setIsTransValue] = useState(false);
  const [transValue, setTransValue] = useState([]);

  const isLoggedOut = async () => {
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('TransInfo');
    myContext.setLoginValue(false);
  };

  const transactionData = async () => {
    try {
      console.log('transValue');
      await useHandleTransactions(setTransValue);
    } catch (error) {
      setIsMessage(error);
    } finally {
    }
  };

  useEffect(() => {
    console.log('mount');
    console.log(transValue);

    if (!isTransValue) {
      transactionData();
      setIsTransValue(true);
      console.log(transValue);
    } else {
      myContext.setLoginValue(true);
    }
  }, []);
  return (
    <ScrollView>
      <TransactionScreenView data={transValue} logoutPress={isLoggedOut} />
    </ScrollView>
  );
};
