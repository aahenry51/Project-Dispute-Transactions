import React from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './TransactionList.style';
import {TTransactionListProps} from './TransactionList.type';

export const TransactionList: FC<TTransactionListProps> = ({
  data,
  selectedID,
}) => {
  const Item = ({item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text style={styles.headerText}>{item.name}</Text>
      <Text style={styles.subText}>{item.info}</Text>
    </TouchableOpacity>
  );
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        data={data}
        renderItem={({item}) => (
          <Item
            item={item}
            onPress={() => {
              navigation.push('Information', {id: item});
              selectedID;
            }}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
