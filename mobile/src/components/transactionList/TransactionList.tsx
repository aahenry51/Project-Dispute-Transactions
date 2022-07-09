import React from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';

import {styles} from './TransactionList.style';
import {TTransactionListProps} from './TransactionList.type';

export const TransactionList: FC<TTransactionListProps> = ({
  data,
  selectedID,
  onPressItem = selectedID => {},
}) => {
  const Item = ({item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text style={styles.headerText}>{item.name}</Text>
      <Text style={styles.subText}>{item.info}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Item
            item={item}
            onPress={
              (() => {
                item.id;
                selectedID = item.id;
              },
              onPressItem((selectedID = item.id)))
            }
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
