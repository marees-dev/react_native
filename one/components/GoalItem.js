import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ itemData, onDelete, id }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onDelete(id)}>
      <View style={styles.listItem}>
        <Text>{itemData}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
export default GoalItem;
