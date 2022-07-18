import React, {FC} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {styles} from './InfoScreen.style';
import {TInfoScreenViewProps} from './InfoScreen.type';
import {useRoute} from '@react-navigation/native';

export const InfoScreenView: FC<TInfoScreenViewProps> = ({onPressDispute}) => {
  const route = useRoute();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <Text style={styles.text}>
        {' Title: ' +
          route.params.id.name +
          ' \n ' +
          'Amount: ' +
          route.params.id.amount +
          ' \n ' +
          'Location: ' +
          route.params.id.info +
          ' \n ' +
          'Category: ' +
          route.params.id.category +
          ' \n '}
      </Text>
      <View style={styles.button}>
        <Button title={'Dispute'} onPress={onPressDispute} />
      </View>
    </View>
  );
};
